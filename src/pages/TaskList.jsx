import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import TaskRow from '../components/TaskRow'
import { useState, useMemo } from 'react'

const TaskList = () => {

    // Recupera il contesto globale
    const { task } = useContext(GlobalContext)

    // stati per l'ordinamento
    const [sortBy, setSortBy] = useState('createdAt');  // Default: createdAt
    const [sortOrder, setSortOrder] = useState(1);    // Default: ascending

    const handleSort = (column) => {
        if (sortBy === column) {
            setSortOrder(sortOrder * -1);
        } else {
            setSortBy(column);
            setSortOrder(1);
        }
    }

    const orderedTasks = useMemo(() => {
        return [...task].sort((a, b) => {
            let comparison = 0;

            if (sortBy === 'title') {
                comparison = a.title.localeCompare(b.title);
            } else if (sortBy === 'status') {
                const statusOrder = { "To do": 1, "Doing": 2, "Done": 3 };
                comparison = statusOrder[a.status] - statusOrder[b.status];
            } else if (sortBy === 'createdAt') {
                comparison = new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
            }

            return comparison * sortOrder;
        });
    }, [task, sortBy, sortOrder]);

    return (
        <div>
            <h1>Lista dei Taskt</h1>
            <table>
                <thead>
                    <tr>
                        <th onClick={() => handleSort('title')} style={{ cursor: 'pointer' }}>Nome</th>
                        <th onClick={() => handleSort('status')} style={{ cursor: 'pointer' }}>Stato</th>
                        <th onClick={() => handleSort('createdAt')} style={{ cursor: 'pointer' }}>Data di creazione</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Mappa i task e crea una riga per ciascuno */}
                    {orderedTasks.map((item, index) => {
                        return (
                            // Usa il componente TaskRow per ogni task
                            // Passa l'item come prop
                            <TaskRow key={index} item={item} />
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default TaskList
