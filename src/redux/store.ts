import { configureStore } from '@reduxjs/toolkit'
import { cartReducer } from './slice/cart'

export default configureStore({
  reducer: {
    cart: cartReducer,
  },
})
