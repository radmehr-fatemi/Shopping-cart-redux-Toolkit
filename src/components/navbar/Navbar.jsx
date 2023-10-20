import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

//Style
import styled from "./Navbar.module.css";

//SVG
import cartSVG from "../../assets/svg/cart.svg";

const Navbar = () => {

    const itemsCounter = useSelector( store => store.cart.itemsCounter )
    
    return <div className={styled.navbarContainer} style={{ maxWidth: "1600px" }} >

        <div className={styled.navbarContainerField1} >
            <Link to="/" > Store </Link>
        </div>

        <div className={styled.navbarContainerField2} >
            <Link to="/" >
                <h1> Shopping Cart </h1>
            </Link>
        </div>

        <div className={styled.navbarContainerField3} >
             <span style={ itemsCounter > 0 ? { display: "block" } : { display: "none" } } > {itemsCounter} </span> 
            <Link to="/cart" >
                <img src={cartSVG} alt="cart photo" />
            </Link>
        </div>

    </div>
};

export default Navbar;