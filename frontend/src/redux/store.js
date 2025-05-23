import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cart/cartSlice'

{/*Creates a Redux store with a cart slice managed by cartReducer.
The cart key becomes part of the state (i.e., state.cart.cartItems). */}
export const store = configureStore({
  reducer: {                        
    cart: cartReducer
  },
})