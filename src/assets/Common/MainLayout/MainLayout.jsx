import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';



const MainLayout = () => {
    return (

        <div>
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-290px)]'>
                <Outlet />
            </div>
            <Footer></Footer>
        </div>
    );

};

export default MainLayout;

