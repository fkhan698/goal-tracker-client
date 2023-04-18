import { useEffect } from "react"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { userLogin, userRegister } from "./auth/authActions"

interface User {
  email: string
  username: string
}

interface AuthState {
  user: User | null
  isLoading: boolean
  success: boolean
  error: string | null
}
const initialState: AuthState = {
  user: null,
  isLoading: false,
  success: false,
  error: null
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(userRegister.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(userRegister.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.success = true
      })
      .addCase(userRegister.rejected, (state, { payload }) => {
        state.isLoading = false
        state.error = "Error registering user"
      })
      .addCase(userLogin.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(userLogin.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.user = payload
        state.error = null
        console.log("setting jwt_token:", payload.token)
        localStorage.setItem("jwt_token", payload.token)
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.isLoading = false
        state.user = null
        state.error = action.error.message ?? "Login failed"
      })
  }
})

export default authSlice.reducer
