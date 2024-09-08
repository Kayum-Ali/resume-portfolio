import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../components/clientSide/Navbar';
import Footer from '../components/clientSide/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
}

export default MainLayout;