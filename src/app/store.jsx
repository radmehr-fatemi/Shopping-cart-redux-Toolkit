import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";

//Reducer
import productsDataReducer from "../features/products/productsDataSlice";

const store = configureStore({
    reducer: {
        products: productsDataReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat( logger )
});

export default store