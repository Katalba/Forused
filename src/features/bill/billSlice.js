import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  imageCamera: null,
  filteredBills: []
}

export const billSlice = createSlice({
  name: 'bill',
  initialState,
  reducers: {
    setCameraImage: (state, action) => {
      state.imageCamera = action.payload
    },
    // setBills: (state, action) => {
    //   state.bills = action.payload
    // },
    filterBillsByCategory: (state, action) => {
      const { category } = action.payload
      state.filteredBills = state.filteredBills.filter(bill => bill.invoices.some(invoice => invoice.category === category))
    }
  }
})

export const { setCameraImage, setBills, filterBillsByCategory } = billSlice.actions

export default billSlice.reducer
