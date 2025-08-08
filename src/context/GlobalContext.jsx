import React, { createContext, useContext, useState, useEffect } from 'react';

const GlobalContext = createContext(); // Crea il "magazzino"

// GlobalProvider è il componente che fornisce il contesto ai figli
const GlobalProvider = ({ children }) => {

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

    return (
        // Fornisce il contesto ai componenti figli
        <GlobalContext.Provider value={{ task, setTask }}>
            {children}
        </GlobalContext.Provider>
    )
}

export { GlobalProvider, GlobalContext };