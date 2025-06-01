import { createSlice } from "@reduxjs/toolkit";

{/*If a library does a default export, you import it like:
        import Swal from 'sweetalert2' (this is correct for swal)*/}
{/*This implies you’re importing a named export:
        import { swal } from 'sweetalert2'*/}
import  Swal  from "sweetalert2";

// Sets the initial state of the cart with an empty array for cartItems.
const initialState = {
    cartItems: []
}

{/*Defines a slice named cart with:
        initialState: the default state.
        reducers: defines addToCart function.
        Checks if the item already exists in cartItems (using _id).
        If not, it adds the item and shows an alert.
        If it exists, it shows a different alert.*/}
const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers:{
        addToCart: (state, action) => {
            const existingItem = state.cartItems.find(item => item._id === action.payload._id);
            if(!existingItem){
                state.cartItems.push(action.payload)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Product Added to the Cart",
                    showConfirmButton: false,
                    timer: 1500
                });
            }else{
                Swal.fire({
                    title: "Already Added to the Cart",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "OK!"
                })
            }
        },
        /*Removes an item from cartItems whose _id matches the _id from action.payload.
          filter: Keeps all items except the one with the matching _id.   */
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(item => item._id !== action.payload._id)
        },
        clearCart: (state) =>{
            state.cartItems = []
        }
    }
})

//export the actions
export const {addToCart, removeFromCart, clearCart} = cartSlice.actions;   //Exports the addToCart action for use in components.
export default cartSlice.reducer;   //Exports the reducer to be used in the Redux store.