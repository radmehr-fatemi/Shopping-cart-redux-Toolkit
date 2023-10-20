import { createSlice } from "@reduxjs/toolkit";

//function
import { totalCounter } from "../../components/shared/functions";

const initialState = {
    selectedItems: [],
    itemsCounter: 0,
    total: 0,
    checkout: false,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {

        ADD_ITEM: (state, action) => {
            if (!state.selectedItems.some(item => item.id === action.payload.id)) {
                state.selectedItems.push({
                    ...action.payload,
                    quantity: 1,
                })
                state.checkout = false
                 state.itemsCounter = totalCounter( state ).itemsCounter
                 state.total = totalCounter( state ).total
            }
        },

        INCREASE: (state, action) => {
            if (state.selectedItems.some(item => item.id === action.payload.id)) {
                const indexI = state.selectedItems.findIndex(item => item.id === action.payload.id)
                state.selectedItems[indexI].quantity++
                state.checkout = false
                state.itemsCounter = totalCounter( state ).itemsCounter
                state.total = totalCounter( state ).total
            }
        },

        DECREASE: (state, action) => {
            if (state.selectedItems.some(item => item.id === action.payload.id)) {
                const indexD = state.selectedItems.findIndex(item => item.id === action.payload.id)
                state.selectedItems[indexD].quantity > 1 && state.selectedItems[indexD].quantity--
                state.checkout = false
                state.itemsCounter = totalCounter( state ).itemsCounter
                state.total = totalCounter( state ).total
            }
        },

        REMOVE_ITEM: (state, action) => {
            if (state.selectedItems.some(item => item.id === action.payload.id)) {
                const indexR = state.selectedItems.findIndex(item => item.id === action.payload.id)
                state.selectedItems.splice(indexR, 1)
                state.checkout = false
                state.itemsCounter = totalCounter( state ).itemsCounter
                state.total = totalCounter( state ).total
            }
        },

        CLEAR: ( state ) => {
            state.selectedItems = [],
            state.itemsCounter = 0,
            state.total = 0,
            state.checkout = false
        },

        CHECKOUT: ( state ) => {
            state.selectedItems = [],
            state.itemsCounter = 0,
            state.total = 0,
            state.checkout = true
        }
    }

});

export default cartSlice.reducer;
export const { ADD_ITEM ,CHECKOUT ,CLEAR ,DECREASE ,INCREASE ,REMOVE_ITEM } = cartSlice.actions;