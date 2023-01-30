import { ProductData } from '@/@types/ProductData'
import { createSlice } from '@reduxjs/toolkit'

export interface CartItem {
  items: ProductData[]
}

const initialState: CartItem = {
  items: [],
}

export const slice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart(state, { payload }) {
      const { id } = payload

      const checkIfItemAlreadyExists = state.items.some(
        (item) => item.id === id,
      )

      if (!checkIfItemAlreadyExists) {
        state.items.push(payload)
      }
    },
  },
})

export const { addItemToCart } = slice.actions

export const selectCartItems = (state) => state.cart.items

export const cartReducer = slice.reducer
