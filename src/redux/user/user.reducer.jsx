import { createSlice } from "@reduxjs/toolkit";
// import cartReducer from "../cart/cart.reducer";

const initialState = {
    currentUser: null
}

export const userCreation = createSlice({
    name: 'SET_CURRENT_USER',
    initialState,
    reducers: {
        setCurrentUser: (state = initialState, action) => {
           return{
            ...state,
            currentUser: action.payload
           }
        }, 
        
    },

})

export const{setCurrentUser} = userCreation.actions

export default userCreation.reducer



