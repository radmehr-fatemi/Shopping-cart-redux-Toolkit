import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

//Style
import styled from "./ProductDetails.module.css";

//action
import { fetchProductsData } from '../../features/products/productsDataSlice';
import { ADD_ITEM, DECREASE, INCREASE, REMOVE_ITEM } from '../../features/cart/cartSlice';

//ICON
import trashSVG from "../../assets/svg/trash.svg";

//function
import { findQuantity } from '../shared/functions';

//Component
import SpinnerLoader from '../shared/spinner/SpinnerLoader';

const ProductDetails = () => {

    const dispatch = useDispatch();
    const id = useParams().id;
    const { data: products, loading, error } = useSelector(store => store.products);
    const selectedItems = useSelector(store => store.cart.selectedItems);

    useEffect(() => {
         !products.length && dispatch(fetchProductsData())
    }, []);


    if (loading) return <SpinnerLoader />
    if (error) return <h1>Sorry there is an error...</h1>

    if (products.length) {
        const product = products[id - 1];
        const { image, title, price, description, category, quantity } = product;

        return <div className={styled.details} style={{ maxWidth: "1600px" }} >

            <div className={styled.detailsIMG} >
                <img src={image} alt="product photo" />
            </div>

            <div className={styled.detailsField} >

                <div className={styled.detailsField1} >
                    <div className={styled.detailsField1Title} >
                        <h3> {title} </h3>
                        <span> Category : {category} </span>
                    </div>
                    <div className={styled.detailsField1Price} >
                        <span> Price : {price} $ </span>
                        <p> {description} </p>
                    </div>

                </div>

                <div className={styled.detailsField2} >
                    {
                        findQuantity(id, selectedItems) == 0 ?
                            <button onClick={() => dispatch(ADD_ITEM(product))} > Add to cart </button> :

                            <div className={styled.detailsField2Buttons} >
                                {findQuantity(id, selectedItems) == 1 && <button onClick={() => dispatch(REMOVE_ITEM(product))} > <img src={trashSVG} alt="trash photo" /> </button>}
                                {findQuantity(id, selectedItems) > 1 && <button onClick={() => dispatch(DECREASE(product))} > - </button>}
                                <span> {findQuantity(id, selectedItems)} </span>
                                {findQuantity(id, selectedItems) >= 1 && <button onClick={() => dispatch(INCREASE(product))} > + </button>}
                            </div>
                    }
                </div>
            </div>

        </div>
    }
};

export default ProductDetails;