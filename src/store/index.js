import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../features/counter/CounterSlice'
import shopSlice from '../features/shop/ShopSlice'

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    shop: shopSlice
  }
})
