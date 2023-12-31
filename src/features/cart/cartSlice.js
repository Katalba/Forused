import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: 'userLogged',
  updatedAt: Date.now().toLocaleString(),
  total: 0,
  items: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const productRepeated = state.items.find(
        item => item.id === action.payload.id
      )
      if (productRepeated) {
        const itemsUpdated = state.items.map(item => {
          if (item.id === action.payload.id) {
            item.quantity += action.payload.quantity
            return item
          }
          return item
        })
        const total = itemsUpdated.reduce(
          (acc, current) => (acc += current.price * current.quantity),
          0
        )
        console.log('este es el total', total)
        state = {
          ...state,
          items: itemsUpdated,
          total,
          updatedAt: new Date().toLocaleString()
        }
      } else {
        state.items.push(action.payload)
        const total = state.items.reduce(
          (acc, current) => (acc += current.price * current.quantity),
          0
        )
        state = {
          ...state,
          total,
          updatedAt: new Date().toLocaleString()
        }
      }
    },
    removeItem: (state, action) => {}
  }
})

export const { addItem, removeItem } = cartSlice.actions

export default cartSlice.reducer
