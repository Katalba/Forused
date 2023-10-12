import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import counterSlice from '../features/counter/CounterSlice'
import { shopApi } from '../services/shopApi'
import shopSlice from '../features/shop/ShopSlice'
import cartSlice from '../features/cart/cartSlice'
import { authApi } from '../services/authApi'
import authSlice from '../features/auth/authSlice'

const store = configureStore({
  reducer: {
    counter: counterSlice,
    shop: shopSlice,
    cart: cartSlice,
    auth: authSlice,
    [shopApi.reducerPath]: shopApi.reducer,
    [authApi.reducerPath]: authApi.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(shopApi.middleware, authApi.middleware)
})

setupListeners(store.dispatch)

export default store
