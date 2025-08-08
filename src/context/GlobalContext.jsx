import React, { createContext, useContext, useState, useEffect } from 'react';

import useTask from '../hooks/useTask'; // Importa il custom hook per gestire i task

const GlobalContext = createContext(); // Crea il contesto globale

// GlobalProvider è il componente che fornisce il contesto ai figli
const GlobalProvider = ({ children }) => {

    // Usa il custom hook per ottenere tutto ciò che serve, passo i ddati come prop al contesto
    // task è l'array dei task, setTask è la funzione per aggiornare i task, addTask, removeTask e updateTask sono funzioni per gestire i task
    const { task, setTask, addTask, removeTask, updateTask } = useTask();

    return (
        // Fornisce il contesto ai componenti figli
        <GlobalContext.Provider value={{ task, setTask, addTask, removeTask, updateTask }}>
            {children}
        </GlobalContext.Provider>
    )
}

export { GlobalProvider, GlobalContext };