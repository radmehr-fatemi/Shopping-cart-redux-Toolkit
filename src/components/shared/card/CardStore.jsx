import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

//Style
import styled from "./CardStore.module.css";

//function
import { shortHandler, findQuantity } from "../functions";

//action
import { ADD_ITEM, CHECKOUT, CLEAR, DECREASE, INCREASE, REMOVE_ITEM } from '../../../features/cart/cartSlice';

//ICON
import trashSVG from "../../../assets/svg/trash.svg";

const CartStore = ({ product }) => {

    const { title, image, price, id } = product;
    const state = useSelector(store => store.cart);
    const dispatch = useDispatch();

    return (
        <div className={styled.cartStore} >

            <Link to={`/details/${id}`} >
                <img src={image} alt="product photo" />
            </Link>

            <div className={styled.cartStoreField1} >
                <p> {shortHandler(title, 13)} ... </p>
                <span> {price} $ </span>
            </div>

            <div className={styled.cartStoreField2} >
                {
                    findQuantity(id, state.selectedItems) == 0 ?
                        <button onClick={() => dispatch(ADD_ITEM(product))} > Add to cart </button> :

                        <div className={styled.cartStoreField2Buttons} >
                            {findQuantity(id, state.selectedItems) == 1 && <button onClick={() => dispatch(REMOVE_ITEM(product))} > <img src={ trashSVG } alt="trash photo" /> </button>}
                            {findQuantity(id, state.selectedItems) > 1 && <button onClick={() => dispatch(DECREASE(product))} > - </button>}
                            <span> {findQuantity(id, state.selectedItems)} </span>
                            {findQuantity(id, state.selectedItems) >= 1 && <button onClick={() => dispatch(INCREASE(product))} > + </button>}
                        </div>
                }
            </div>

        </div>
    );
};

export default CartStore;