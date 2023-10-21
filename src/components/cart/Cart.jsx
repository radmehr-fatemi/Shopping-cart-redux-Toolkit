import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

//Style
import styled from "./Cart.module.css";

//ICON
import arrowBackSVG from "../../assets/svg/arrow-back.svg";
import trashSVG from "../../assets/svg/trash-black.svg";

//action
import { CHECKOUT, CLEAR } from '../../features/cart/cartSlice';

//Component
import CardCart from '../shared/card/CardCart';
import ScrollToTop from '../shared/ScrollToTop';

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
                itemsCounter > 0 ?
                    selectedItems.map(item => <CardCart key={item.id} product={item} />) :

                    <div className={styled.cardsEmpty} >
                        <h3> You're shopping cart in empty </h3>
                        <Link to="/" > Got to Store </Link>
                    </div>
            }
        </div>

        <div className={styled.fields} >
            <div className={styled.field1} >
                <h3>Total number :</h3>
                <span> {itemsCounter} </span>
            </div>

            <div className={styled.field2} >
                <h3>Total price :</h3>
                <span> {total.toFixed(2)} $ </span>
            </div>

            <div className={styled.field3} >
                {console.log(checkout, itemsCounter)}
                {
                    checkout || itemsCounter == 0 ?
                        <button disabled style={{ background: "#8bb191" }} >Checkout</button> :
                        <button onClick={() => dispatch(CHECKOUT())} >Checkout</button>
                }
            </div>
        </div>
        <ScrollToTop />
    </div>
};

export default Cart;