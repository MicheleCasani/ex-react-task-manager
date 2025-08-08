import React from 'react'
import { useState, useRef } from 'react'

const AddTask = () => {

    // Stato per il titolo del task
    const [title, setTitle] = useState('');

    // Stato per gli errori
    const [error, setError] = useState('');

    // utilizzo useRef per i campi non controllati
    const descriptionRef = useRef();
    const statusRef = useRef();

    // costante con i simboli non consentiti
    const symbols = "!@#$%^&*()-_=+[]{}|;:'\\\",.<>?/`~";

    const handleSubmit = (e) => {
        e.preventDefault(); // Previene il refresh della pagina

        // validazione del titolo
        if (title.trim() === '') {
            setError('il Titolo è obbligatorio')
            return;
        }

        // validazione della descrizione
        if (descriptionRef.current.value.trim() === '') {
            setError('la Descrizione è obbligatoria')
            return;
        }

        for (let char of title) {
            if (symbols.includes(char)) {
                setError('Il titolo non può contenere simboli speciali');
                return;
            }
        }

        // Pulisci errori precedenti se tutto è valido
        setError('');

        // se non ci sono errori riporto i dati
        const taskData = {
            title: title,
            description: descriptionRef.current.value,
            status: statusRef.current.value
        }

        console.log("Dati del task:", taskData);

        // pulisco i dati dopo l'invio
        setTitle('');
        descriptionRef.current.value = '';
        statusRef.current.value = 'To do';
    }

    return (
        <>
            <h1>Aggiungi Task</h1>
            <div className='form-container'>
                <form action="" onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label htmlFor="taskName" className='form-label'>Nome Task</label>
                        <input type="text" id="taskName"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>

                    {error && <span style={{ color: 'red', fontSize: '12px' }}>{error}</span>}

                    <div className='form-group'>
                        <label htmlFor="taskDescription" className='form-label'>Descrizione Task</label>
                        <textarea id="taskDescription" rows="4"
                            ref={descriptionRef}
                        ></textarea>
                    </div>

                    <div className='form-group'>
                        <label htmlFor="status" className='form-label'>Stato</label>
                        <select name="status" id="status" ref={statusRef}>
                            <option value="To do">Da Fare</option>
                            <option value="Doing">In Corso</option>
                            <option value="Done">Fatto</option>
                        </select>
                    </div>

                    <div className='form-group'>
                        <button type="submit" className='btn'>Aggiungi Task</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AddTask

