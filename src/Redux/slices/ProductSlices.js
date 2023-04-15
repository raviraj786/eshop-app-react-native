import { createSlice } from "@reduxjs/toolkit";


const ProductSlices =  createSlice ({
    name:'product',
    initialState:{
        data:null,
        isLoading:false,
    },
    reducers:{
        addProduct (state ,action){
          state.data = action.payload
        },
    },
});


export const {addProduct} = ProductSlices.actions

export default ProductSlices.reducer
