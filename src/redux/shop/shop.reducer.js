import { createSlice } from "@reduxjs/toolkit"
import SHOP_DATA from "./shop.data"



const initialState = {
    collections: SHOP_DATA 
}

const shopReducer = createSlice({
    name: 'directory',
    initialState,
    reducers:{
        shop:(state=initialState, action) =>{
            return(
                state.collections.push(action.payload)
            )
        }
    }
})

export const {shop} = shopReducer.actions;

export default shopReducer.reducer;



