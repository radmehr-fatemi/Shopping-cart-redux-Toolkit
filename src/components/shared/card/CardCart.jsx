import React from 'react';
import { Link } from "react-router-dom";
import { useDispatch ,useSelector } from "react-redux";

//Style
import styled from "./CardCart.module.css";

//action
import { ADD_ITEM ,CHECKOUT ,CLEAR ,DECREASE ,INCREASE ,REMOVE_ITEM } from '../../../features/cart/cartSlice';

//function
import { shortHandler } from '../functions';

//ICON
import trashSVG from "../../../assets/svg/trash.svg";

const CardCart = ({ product }) => {

    const { title ,image ,quantity ,price ,id } = product
    const dispatch = useDispatch();
    const state = useSelector( store => store.cart );
    
    return (
        <div className={ styled.cardCart } >
            <Link to={ `/details/${id}` } >
            <img src={ image } alt="product photo" />
            </Link>

            <div className={ styled.cardField1 } >
                <p> { shortHandler( title ,14 ) } .. </p>
                <span> { price } $ </span>
            </div>

            <div className={ styled.cardField2 } >
            {
                    quantity == 0 ?
                        <button onClick={() => dispatch(ADD_ITEM(product))} > Add to cart </button> :

                        <div className={styled.cardField2Buttons} >
                            {quantity == 1 && <button onClick={() => dispatch(REMOVE_ITEM(product))} > <img src={ trashSVG } alt="trash photo" /> </button>}
                            {quantity > 1 && <button onClick={() => dispatch(DECREASE(product))} > - </button>}
                            <span> {quantity} </span>
                            {quantity >= 1 && <button onClick={() => dispatch(INCREASE(product))} > + </button>}
                        </div>
                }
            </div>
        </div>
    );
};

export default CardCart;