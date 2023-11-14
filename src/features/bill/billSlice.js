import { createSlice } from '@reduxjs/toolkit'
import dataCategories from '../../data/dataCategories'

const initialState = {
  imageCamera: null,
  categories: dataCategories,
  bills: [],
  filteredBills: null
}

export const billSlice = createSlice({
  name: 'bill',
  initialState,
  reducers: {
    setCameraImage: (state, action) => {
      return {
        ...state,
        imageCamera: action.payload
      }
    },
    filterBillsByCategory: (state, action) => {
      const category = action.payload
      // Filtra las facturas por la categoría especificada
      const filteredBills = state.bills.filter((bill) => bill.category === category)

      return {
        ...state,
        filteredBills
      }
    }
  }
})

export const { setCameraImage, filterBillsByCategory } = billSlice.actions

export default billSlice.reducer
