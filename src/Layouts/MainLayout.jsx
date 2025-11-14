import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';
import Latest from '../Components/Latest';
import Navbar from '../Components/Navbar';
import LeftAside from '../Components/homelayout/LeftAside';
import RightAside from '../Components/homelayout/RightAside';

const MainLayout = () => {
    return (
        <div>
            <header>

                <Header></Header>
            </header>
            <section className='w-11/12  mx-auto'>
                <Latest></Latest>
            </section>
            <nav className='w-11/12 mx-auto my-3'>
                <Navbar></Navbar>
            </nav>
            
            <main className='w-11/12 mx-auto my-3 grid grid-cols-12'>
                
                <aside className='col-span-3'>
                    <LeftAside></LeftAside>
                </aside>
                <section className='main col-span-6 p-4 '>
                    <Outlet></Outlet>
                </section>
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
           


        </div>
    );
};

export default MainLayout;