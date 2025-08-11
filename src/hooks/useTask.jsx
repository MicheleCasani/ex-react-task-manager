import React from 'react'
import { useState, useEffect } from 'react';

const useTask = () => {
    // Stato per i task, inizialmente vuoto
    const [task, setTask] = useState([]);

    // URL dell'API recuperato dal file .env
    const API_URL = import.meta.env.VITE_API_URL;

    useEffect(() => {
        // Chiamata API per prendere i task
        const fetchTasks = async () => {
            // Prova a fare la fetch dei task
            try {
                const response = await fetch(`${API_URL}/tasks`)
                const data = await response.json();
                setTask(data); // Aggiorna lo stato con i task ricevuti
                console.log('Dati ricevuti:', data);
            }
            // Gestione degli errori
            catch (error) {
                console.log('Errore durante il fetch dei task:', error);
            }
        }
        fetchTasks(); // Chiama la funzione per prendere i task
    }, [])

    // funzione per aggiungere un task
    const addTask = async (newTask) => {
        try {
            // Effettua la chiamata POST per aggiungere un nuovo task
            const response = await fetch(`${API_URL}/tasks`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newTask)
            })
            const data = await response.json();

            if (data.success) {
                setTask((prevTask) => {
                    return [...prevTask, data.task];
                })
                console.log('Task aggiunto con successo:', data.task);
            }
            else {
                throw new Error('Errore durante l\'aggiunta del task: ' + error.message);
            }
        } catch (error) {
            console.log('Errore durante l\'aggiunta del task:', error);
        }

    }

    const removeTask = async (deleteTask) => {
        try {
            const response = await fetch(`${API_URL}/tasks/${deleteTask.id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            const data = await response.json();
            if (data.success) {
                setTask((prevTask) => {
                    return prevTask.filter(task => task.id !== deleteTask.id);
                })
            }
            else {
                throw new Error('Errore durante l\'eliminazione del task:', data.message);
            }
        }
        catch (error) {
            throw error; // Rilancia l'errore per gestirlo nel componente
        }

    }

    const updateTask = () => {
        // Funzione per aggiornare un task
    }

    return {
        task,
        setTask,
        addTask,
        removeTask,
        updateTask
    }


}

export default useTask
