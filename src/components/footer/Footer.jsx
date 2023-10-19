import React from 'react';

//Style
import Styled from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={ Styled.footerContainer } style={{ maxWidth: "1600px" }} >
            <span> Radmehr | Shoppin-Cart </span>
        </div>
    );
};

export default Footer;