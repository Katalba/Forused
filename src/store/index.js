import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import counterSlice from '../features/counter/CounterSlice'
import { shopApi } from '../services/shopApi'
import shopSlice from '../features/shop/ShopSlice'
import cartSlice from '../features/cart/cartSlice'

const store = configureStore({
  reducer: {
    counter: counterSlice,
    shop: shopSlice,
    cart: cartSlice,
    [shopApi.reducerPath]: shopApi.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(shopApi.middleware)
})

setupListeners(store.dispatch)

export default store
