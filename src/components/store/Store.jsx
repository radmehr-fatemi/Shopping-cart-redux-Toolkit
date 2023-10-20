import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

//Style
import styled from "./Store.module.css";

//action
import { fetchProductsData } from '../../features/products/productsDataSlice';

//Component
import SpinnerLoader from '../shared/spinner/SpinnerLoader';
import CartStore from '../shared/card/CartStore';

const Store = () => {

    const dispatch = useDispatch();
    const { data: products, loading, error } = useSelector(store => store.products)

    useEffect(() => {
        !products.length && dispatch(fetchProductsData())
    }, []);

    if (loading) return <SpinnerLoader />
    if (error) return <h1>Error...</h1>

    if (products.length) return <div className={styled.storeContainer} style={{ maxWidth: "1600px" }} >

        <div className={styled.storeContainerField} >
            <h1> Popular : </h1>

            <div className={styled.cards} >
                {
                    products.map(product => <CartStore key={product.id} product={product} />)
                }
            </div>
        </div>
        
        <div className={styled.storeContainerField} >
            <h1> Suggested : </h1>

            <div className={styled.cards} >
                {
                    products.map( ( product ,index ) => index > 2 && <CartStore key={product.id} product={product} />)
                }
            </div>
        </div>
        
        <div className={styled.storeContainerField} >
            <h1> Popular : </h1>

            <div className={styled.cards} >
                {
                    products.map(product => <CartStore key={product.id} product={product} />)
                }
            </div>
        </div>
    </div>
};

export default Store;