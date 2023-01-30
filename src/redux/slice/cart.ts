import { ProductData } from '@/@types/ProductData'
import { createSlice } from '@reduxjs/toolkit'

export interface CartItem {
  items: ProductData[]
}

export interface CartState {
  cart: CartItem
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
    removeItemFromCart(state, { payload }) {
      const { id } = payload

      state.items = state.items.filter((item) => item.id !== id)
    },

    changeItemQuantity(state, { payload: { productId, quantity } }) {
      const index = state.items.findIndex((item) => item.id === productId)
      if (index >= 0) {
        state.items[index].quantity = quantity
      }
    },
  },
})

export const { addItemToCart, removeItemFromCart, changeItemQuantity } =
  slice.actions

export const selectCartItems = (state: CartState) => state.cart.items

export const cartReducer = slice.reducer
