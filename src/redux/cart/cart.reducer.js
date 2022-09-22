import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    hidden: true,
    cartItems: []
};


const cartReducer = createSlice({
    name:'toggle_cart_hidden',
    initialState,
    reducers:{
        cartToggle:(state=initialState)=>{
            return{
                ...state,
                hidden: !state.hidden
            }
        },
        addItem:(state = initialState, action)=>{
            const addItem = state.cartItems.find((item) => item.id === action.payload.id);
            if (addItem){
                addItem.quantity++;
            } else{
                state.cartItems.push({...action.payload, quantity: 1})
            }
            
        },

        clearItem:(state = initialState, action) => {
            const clearItem = state.cartItems.filter(item => item.id !== action.payload.id);
            state.cartItems = clearItem;
        },

        increaseItem: (state, action) => {
            const item = state.cartItems.find((item) => item.id === action.payload.id);
            item.quantity++
          },
        decreaseItem: (state, action) => {
            const item  = state.cartItems.find((item) => item.id === action.payload.id);
            if (item.quantity === 1) {
              item.quantity = 1
            } else {
              item.quantity--;
            }
          },
    }
})


export const {cartToggle} = cartReducer.actions;



export const {addItem, clearItem, decreaseItem, increaseItem} = cartReducer.actions



export default cartReducer.reducer;