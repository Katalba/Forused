import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  imageCamera: null
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
    }
  }
})

export const { setCameraImage } = billSlice.actions

export default billSlice.reducer
