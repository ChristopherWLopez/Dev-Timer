import { createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: [],
        numberOfItems: 0,
    },

    reducers: {
        addCartItem: (state, action)=>{
            
            //updates state while items get added
            state.numberOfItems++;
            state.cartItems.push(action.payload);
        },
        removeItem: (state, action)=>{
            const index = state.cartItems.indexOf(action.payload);
            state.cartItems.splice(index,1);
            state.numberOfItems--;
        },
    },
});

export default cartSlice;