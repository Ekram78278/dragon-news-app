import React from 'react';
import Navbar from '../Components/Navbar';

const AuthLayout = () => {
    return (
        <div className='bg-base-200'>
           <header className='w-11/12 mx-auto py-2 min-h-screen'>
            <Navbar></Navbar>
           </header>
        </div>
    );
};

export default AuthLayout;