import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  token: null,
  imageCamera: null,
  localId: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      return {
        ...state,
        user: action.payload.email,
        token: action.payload.idToken,
        localId: action.payload.localId
      }
    },
    clearUser: () => {
      return { user: null, token: null }
    },
    setCameraImage: (state, action) => {
      return {
        ...state,
        imageCamera: action.payload
      }
    }
  }
})

export const { setUser, clearUser, setCameraImage } = authSlice.actions

export default authSlice.reducer
