import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../pages/Shared/Navbar'
import Footer from '../pages/Shared/Footer'

function Root() {
    return (
        <div>
            <div className='max-w-screen-xl mx-auto border-2'>
                <Navbar></Navbar>
            </div>
            <div className='min-h-screen max-w-screen-xl mx-auto border-2'>
                <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    )
}

export default Root