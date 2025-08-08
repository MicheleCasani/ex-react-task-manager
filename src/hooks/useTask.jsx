import React from 'react'
import { useState, useEffect } from 'react';

const useTask = () => {
    // Stato per i task, inizialmente vuoto
    const [task, setTask] = useState([]);

    useEffect(() => {
        const API_URL = import.meta.env.VITE_API_URL;

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

    const addTask = () => {
        // Funzione per aggiungere un task
    }

    const removeTask = () => {
        // Funzione per rimuovere un task
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
