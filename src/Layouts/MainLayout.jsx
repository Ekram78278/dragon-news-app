import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';
import Latest from '../Components/Latest';
import Navbar from '../Components/Navbar';
import LeftAside from '../Components/homelayout/LeftAside';

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
            
            <main>
                
                <aside>
                    <LeftAside></LeftAside>
                </aside>
                <section className='main'>
                    <Outlet></Outlet>
                </section>
                <section className='right_nav'></section>
            </main>
           


        </div>
    );
};

export default MainLayout;