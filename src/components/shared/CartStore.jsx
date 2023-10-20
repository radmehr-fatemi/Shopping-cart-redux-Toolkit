import React from 'react';
import { Link } from 'react-router-dom';

//Style
import styled from "./CartStore.module.css";

//function
import { shortHandler } from './functions';

const CartStore = ({ product }) => {

    const { title, image, price ,id } = product;

    return (
        <div className={styled.cartStore} >

            <Link to={ `/products/${ id }` } >
                <img src={image} alt="product photo" />
            </Link>

            <div className={styled.cartStoreField1} >
                <p> {shortHandler(title, 13)} ... </p>
                <span> {price} $ </span>
            </div>

            <div className={styled.cartStoreField2} >
                <button> Add to cart </button>
            </div>

        </div>
    );
};

export default CartStore;