import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    wishItems: []
}

export const wishListSlice = createSlice({
    name: 'wishList',
    initialState,
    reducers: {
        addWishList: (state, action)=>{
             state.wishItems = [...state.wishItems,action.payload]
        },
        removeWishList: (state, action)=>{
        //    const updatedItem = state.wishItems.filter((item, index)=>{
        //         if(index!==action.payload){
        //             return item
        //         }
        //    })
           state.wishItems.splice(action.payload, 1);
        //    state.wishItems = updatedItem;
           console.log('action.payload.index-->',action.payload)
        }
    }
})

export default wishListSlice.reducer;
export const {addWishList, removeWishList} = wishListSlice.actions;