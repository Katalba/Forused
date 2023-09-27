import { createSlice } from '@reduxjs/toolkit'
import dataCategories from '../../data/dataCategories'
import dataProducts from '../../data/products'

const initialState = {
  categories: dataCategories,
  products: dataProducts,
  productFilteredByCategory: [],
  categorySelected: null,
  productIdSelected: null
}

export const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    setCategorySelected: () => {},
    setProductIdSelected: () => {}
  }
})

export const { setCategorySelected, setProductIdSelected } = shopSlice.actions

export default shopSlice.reducer
