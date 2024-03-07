import { configureStore } from '@reduxjs/toolkit';
import wishListReducer from './wishListSlice';

const appStore = configureStore({
    reducer:{
        wishList: wishListReducer
    }
})

export default appStore;