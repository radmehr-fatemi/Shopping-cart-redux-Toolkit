import React from 'react';

//Component
import Navbar from '../header/Navbar';
import Footer from '../footer/Footer';

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
};

export default Layout;