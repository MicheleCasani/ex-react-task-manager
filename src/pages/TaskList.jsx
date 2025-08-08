import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import TaskRow from '../components/TaskRow'

const TaskList = () => {

    // Recupera il contesto globale
    const { task } = useContext(GlobalContext)

    return (
        <div>
            <h1>pagina TaskList</h1>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>stato</th>
                        <th>Data di creazione</th>
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
