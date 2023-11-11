import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import counterSlice from '../features/counter/CounterSlice'
import { shopApi } from '../services/shopApi'
import shopSlice from '../features/shop/ShopSlice'
import cartSlice from '../features/cart/cartSlice'
import { authApi } from '../services/authApi'
import authSlice from '../features/auth/authSlice'
import billSlice from '../features/bill/billSlice'
import { billApi } from '../services/billApi'

const store = configureStore({
  reducer: {
    counter: counterSlice,
    shop: shopSlice,
    cart: cartSlice,
    auth: authSlice,
    bill: billSlice,

    [shopApi.reducerPath]: shopApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [billApi.reducerPath]: billApi.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(shopApi.middleware, authApi.middleware, billApi.middleware)
})

setupListeners(store.dispatch)

export default store
