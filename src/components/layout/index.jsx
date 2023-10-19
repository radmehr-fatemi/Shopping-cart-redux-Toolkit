import React from 'react';

//Component
import Navbar from '../header/Navbar';
import Footer from '../footer/footer';

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