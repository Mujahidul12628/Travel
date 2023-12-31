import React, { useContext } from "react";
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Loader from '../Loader/Loader';
import { Toaster } from 'react-hot-toast';
import { AuthContext } from "../../providers/AuthProvider";
import Navbar from "../Navbar/Navbar";



const MainLayout = () => {

    const { loading } = useContext(AuthContext)
    return (
        <div>
            {loading ? (
                <Loader></Loader>
            ) : (
                <>
                    <Navbar></Navbar>

                    <div className='min-h-[calc(100vh-290px)]'>
                        <Outlet />
                    </div>
                    <Footer></Footer>
                    <Toaster></Toaster>
                </>
            )}
        </div>
    );

};

export default MainLayout;

