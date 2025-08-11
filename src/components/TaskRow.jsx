import React from 'react'
import { Link } from 'react-router-dom'

// Componente per visualizzare una riga di un task
const TaskRow = ({ item }) => {

    // Funzione per determinare il colore di sfondo in base allo stato del task
    const getStatusColor = (status) => {
        if (status === 'To do') return 'lightcoral'      // rosso più delicato
        if (status === 'Doing') return 'gold'            // giallo più elegante  
        if (status === 'Done') return 'lightgreen'       // verde più soft
        return 'white'
    }

    return (
        <tr>
            <td><Link to={`/task/${item.id}`} className='link-task'>{item.title}</Link></td>
            {/* cambio lo stile della cella in base allo stato del task usando la funzione getStatusColor */}
            <td style={{ backgroundColor: getStatusColor(item.status) }}>{item.status}</td>
            <td>{new Date(item.createdAt).toLocaleDateString()}</td>
        </tr>
    )
}

export default React.memo(TaskRow) // Usa React.memo per evitare render inutili
