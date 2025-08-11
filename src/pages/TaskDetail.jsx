import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

const TaskDetail = () => {

    const { id } = useParams(); // tramite l'hook useparams recuperi l'id del task selezionato

    const { task, removeTask } = useContext(GlobalContext);

    const navigate = useNavigate();

    const handleDelete = async () => {
        try {
            await removeTask(currentTask);
            alert("Task eliminato con successo!");
            navigate('/');
        } catch (error) {
            alert("Impossibile eliminare il task!");
        }
    }

    const currentTask = task.find(task => {
        return (
            task.id === parseInt(id)
        )
    })
    if (!currentTask) return <h2>Task non trovato!</h2>; // se non trovi il task con quell'id, ritorni un messaggio di errore

    return (
        <div className="task-detail">
            <h2>Dettagli Task</h2>

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

            <button className="delete-button" onClick={handleDelete}>
                Elimina Task
            </button>
        </div>
    )
}

export default TaskDetail
