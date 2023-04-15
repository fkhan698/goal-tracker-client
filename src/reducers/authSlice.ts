import { useEffect } from "react"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { userLogin } from "./auth/authActions"

interface User {
  email: string
  username: string
}

interface AuthState {
  user: User | null
  isLoading: boolean
  error: string | null
}
const initialState: AuthState = {
  user: null,
  isLoading: false,
  error: null
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.isLoading = false
        state.user = action.payload.user
        state.error = null
        console.log("setting jwt_token:", action.payload.token)
        localStorage.setItem("jwt_token", action.payload.token)
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.isLoading = false
        state.user = null
        state.error = action.error.message ?? "Login failed"
      })
  }
})

export default authSlice.reducer
