import { createSlice ,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    data: [],
    error: "",
};

const fetchProductsData = createAsyncThunk( "products/fetchProductsData" , () => {
    return axios
    .get("https://fakestoreapi.com/products")
    .then( response => response.data )
} );

const productsSlice = createSlice({
    name: "products",
    initialState,
    extraReducers: ( builder ) => {

        builder.addCase( fetchProductsData.pending , ( state ) => {
            state.loading = true
        } )

        builder.addCase( fetchProductsData.fulfilled ,( state ,action ) => {
            state.loading = false
            state.data = action.payload
            state.error = ''
        } )

        builder.addCase( fetchProductsData.rejected ,( state ,action ) => {
            state.loading = false
            state.data = []
            state.error = action.error.message
        } )
    }
});

export default productsSlice.reducer;
export { fetchProductsData }