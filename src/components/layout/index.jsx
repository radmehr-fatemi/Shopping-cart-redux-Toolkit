import React from 'react';

//Component
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';

const Layout = ({ children }) => {
    return (
        <div style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
        }} >
            <Navbar />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;