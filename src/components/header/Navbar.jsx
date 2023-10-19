import React from 'react';
import { Link } from 'react-router-dom';

//Style
import styled from "./Navbar.module.css";

//SVG
import cartSVG from "../../assets/svg/cart.svg";

const Navbar = () => {
    return <div className={styled.cartContainer} style={{ maxWidth: "1600px" }} >

        <div className={styled.cartContainerField1} >
            <Link to="/" > Store </Link>
        </div>

        <div className={styled.cartContainerField2} >
            <Link to="/" >
                <h1> Shopping Cart </h1>
            </Link>
        </div>

        <div className={styled.cartContainerField3} >
                <span> 10 </span>
            <Link to="/cart" >
                <img src={cartSVG} alt="cart photo" />
            </Link>
        </div>

    </div>
};

export default Navbar;