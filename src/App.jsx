import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import DefaultLayout from './layout/DefaultLayout';
import TaskList from './pages/TaskList';
import AddTask from './pages/AddTask';
import { GlobalProvider } from './context/GlobalContext';


function App() {

  return (
    <GlobalProvider> {/* Contexto globale per gestire i task */}
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}> {/* Layout con Navbar */}
            <Route path="/" element={<TaskList />} /> {/* Pagina per visualizzare i task */}
            <Route path="/add" element={<AddTask />} /> {/* Pagina per aggiungere un nuovo task */}
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App
