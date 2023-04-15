import { useEffect } from "react"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { userLogin } from "./auth/authActions"
import axios from "axios"

interface Credentials {
  email: string
  password: string
}

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

export const login = createAsyncThunk(
  "auth/login",
  async (credentials: Credentials) => {
    const headers = {
      Authorization: `Basic ${btoa(
        `${credentials.email}:${credentials.password}`
      )}`
    }
    const response = await axios.post(
      "http://localhost:8000/auth/login",
      {},
      { headers }
    )
    console.log("login response:", response.data)
    return response.data
  }
)

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false
        state.user = action.payload.user
        state.error = null
        console.log("setting jwt_token:", action.payload.token)
        localStorage.setItem("jwt_token", action.payload.token)
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false
        state.user = null
        state.error = action.error.message ?? "Login failed"
      })
  }
})

export default authSlice.reducer
