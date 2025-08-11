import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import TaskRow from '../components/TaskRow'
import { useState } from 'react'

const TaskList = () => {

    // Recupera il contesto globale
    const { task } = useContext(GlobalContext)

    // stati per l'ordinamento
    const [sortBy, setSortBy] = useState('createdAt');  // Default: createdAt
    const [sortOrder, setSortOrder] = useState(1);    // Default: ascending



    return (
        <div>
            <h1>Lista dei Taskt</h1>
            <table>
                <thead>
                    <tr>
                        <th><button onClick={''}>Nome</button></th>
                        <th><button onClick={''}>Stato</button></th>
                        <th><button onClick={''}>Data di creazione</button></th>
                    </tr>
                </thead>
                <tbody>
                    {/* Mappa i task e crea una riga per ciascuno */}
                    {task.map((item, index) => {
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
