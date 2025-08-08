import React from 'react'
import { Outlet } from 'react-router-dom'

import Navbar from '../components/Navbar'

const DefaultLayout = () => {
    return (
        <main className="default-layout">
            <Navbar />
            <div className="container">
                <Outlet />
            </div>
        </main>
    )
}

export default DefaultLayout
