import React from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

const TaskDetail = () => {

    const { id } = useParams(); // tramite l'hook useparams recuperi l'id del task selezionato

    const { task } = useContext(GlobalContext);

    const currentTask = task.find(task => {
        return (
            task.id == id
        )
    })
    if (!currentTask) return <div>Task non trovato!</div>; // se non trovi il task con quell'id, ritorni un messaggio di errore

    return (
        <div className="task-detail">
            <h2>Dettagli Task</h2>

            <div className="task-info">
                <strong>ID:</strong> {currentTask.id}
            </div>

            <div className="task-info">
                <strong>Nome:</strong> {currentTask.title}
            </div>

            <div className="task-info">
                <strong>Descrizione:</strong> {currentTask.description}
            </div>

            <div className="task-info">
                <strong>Stato:</strong> {currentTask.status}
            </div>

            <div className="task-info">
                <strong>Creato il:</strong> {new Date(currentTask.createdAt).toLocaleDateString()}
            </div>

            <button className="delete-button" onClick={() => console.log("Elimino task")}>
                Elimina Task
            </button>
        </div>
    )
}

export default TaskDetail
