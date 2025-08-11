import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import Modal from '../components/Modal'

const TaskDetail = () => {

    const { id } = useParams(); // tramite l'hook useparams recuperi l'id del task selezionato

    const { task, removeTask } = useContext(GlobalContext);

    // Stati per i modal
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const navigate = useNavigate();

    const handleDeleteClick = () => {
        setShowConfirmModal(true); // Mostra il modal di conferma
    }

    const handleDelete = async () => {
        setShowConfirmModal(false); // Chiudi il modal di conferma
        try {
            await removeTask(currentTask);
            setShowSuccessModal(true); // Mostra il modal di successo
        } catch (error) {
            alert("Impossibile eliminare il task!");
        }
    }

    const currentTask = task.find(task => {
        return (
            task.id === parseInt(id)
        )
    })

    // Se il task non esiste E non stiamo mostrando il modal di successo, mostra errore
    if (!currentTask && !showSuccessModal) return <h2>Task non trovato!</h2>;

    return (
        <div className="task-detail">
            {currentTask ? (
                <>
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

                    <button className="delete-button" onClick={handleDeleteClick}>
                        Elimina Task
                    </button>
                </>
            ) : (
                <h2>Elaborazione...</h2>
            )}

            {/* modale di successo */}
            <Modal
                title="Task Eliminato"
                content="Il task è stato eliminato con successo."
                show={showSuccessModal}
                onClose={() => navigate('/')}
                onConfirm={() => navigate('/')}
                confirmText="OK"
            />

            {/* modale di conferma eliminazione */}
            <Modal
                title="Conferma Eliminazione"
                content="Sei sicuro di voler eliminare questo task?"
                show={showConfirmModal}
                onClose={() => setShowConfirmModal(false)}
                onConfirm={handleDelete}
                confirmText="Elimina"
            />

        </div>
    )
}

export default TaskDetail
