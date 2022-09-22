import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

import logger from 'redux-logger';

import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";



// configuring the store
const persistConfig = {
    key: 'root',
    storage,
    
  }

const persistedReducer = persistReducer(persistConfig, cartReducer)


export const store = configureStore({
    reducer:{
        user: userReducer,
        cart: persistedReducer,
        directory: directoryReducer,
        shop: shopReducer,
    },

    middleware:(getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        
        
      },
    }).concat(logger)



});

export const persistore = persistStore(store)


