import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";

//Reducer
import productsDataReducer from "../features/products/productsDataSlice";
import cartReducer from "../features/cart/cartSlice";

const store = configureStore({
    reducer: {
        products: productsDataReducer,
        cart: cartReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat( logger )
});

export default store