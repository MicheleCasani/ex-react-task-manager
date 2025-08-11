import React from 'react'
import Modal from './Modal';
import { useState, useRef } from 'react';

const EditTaskModal = ({ show, onClose, onSave, task }) => {

    const [title, setTitle] = useState(task?.title || '');
    const descriptionRef = useRef(null);
    const statusRef = useRef(null);
    const formRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updateTask = {
            ...task,
            title,
            description: descriptionRef.current.value,
            status: statusRef.current.value
        }
        onSave(updateTask);
    }

    const formContent = (
        <div className='form-container'>
            <form ref={formRef} onSubmit={handleSubmit}>

                <div className='form-group'>
                    <label htmlFor="taskName" className='form-label'>Nome Task</label>
                    <input type="text" id="taskName"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>



                <div className='form-group'>
                    <label htmlFor="taskDescription" className='form-label'>Descrizione Task</label>
                    <textarea id="taskDescription" rows="4"
                        ref={descriptionRef}
                        defaultValue={task?.description}
                    ></textarea>
                </div>

                <div className='form-group'>
                    <label htmlFor="status" className='form-label'>Stato</label>
                    <select name="status" id="status" ref={statusRef} defaultValue={task?.status}>
                        <option value="To do">Da Fare</option>
                        <option value="Doing">In Corso</option>
                        <option value="Done">Fatto</option>
                    </select>
                </div>
            </form>
        </div>
    )

    return (
        <Modal

            title="Modifica Task"
            content={formContent}
            show={show}
            onClose={onClose}
            onConfirm={() => formRef.current.requestSubmit()}
            confirmText="Salva"
        />
    )
}

export default EditTaskModal
