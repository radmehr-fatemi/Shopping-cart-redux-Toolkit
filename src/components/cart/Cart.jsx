import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

//Style
import styled from "./Cart.module.css";

//ICON
import arrowBackSVG from "../../assets/svg/arrow-back.svg";
import trashSVG from "../../assets/svg/trash-black.svg";

//action
import { CLEAR } from '../../features/cart/cartSlice';

//Component
import CardCart from '../shared/card/CardCart';

const Cart = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { selectedItems, itemsCounter, total, checkout } = useSelector(store => store.cart);

    return <div className={styled.cart} style={{ maxWidth: "1600px" }} >

        <div className={styled.cartHeader} >
            <img src={arrowBackSVG} alt="back photo" onClick={() => navigate(-1)} />
            <h1>Cart</h1>
            <img src={trashSVG} alt="trash photo" onClick={() => dispatch(CLEAR())} />
        </div>

        <div className={styled.cards} >
            {
                !!itemsCounter && selectedItems.map(item => <CardCart key={item.id} product={item} />)
            }
        </div>

        <div className={styled.fields} >
            <div className={styled.field1} >
                <h3>Total number :</h3>
                <span> {itemsCounter} </span>
            </div>

            <div className={styled.field2} >
                <h3>Total price :</h3>
                <span> {total} $ </span>
            </div>

            <div className={styled.field3} >
                {
                    checkout ?
                        <button disabled >Checkout</button> :
                        <button onCanPlay={ () => dispatch( checkout ) } >Checkout</button>
                }
            </div>
        </div>

    </div>
};

export default Cart;