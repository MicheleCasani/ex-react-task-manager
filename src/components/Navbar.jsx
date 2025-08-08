import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <div className="navbar">
                <NavLink to="/" className="btn">Task List</NavLink>
                <NavLink to="/add" className="btn">Add Task</NavLink>
            </div>
        </nav>
    )
}

export default Navbar
