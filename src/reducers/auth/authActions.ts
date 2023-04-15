import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const backendURL = "http://localhost:8000"

interface Credentials {
  email: string
  password: string
}

export const userLogin = createAsyncThunk(
  "auth/login",
  async (credentials: Credentials, { rejectWithValue }) => {
    try {
      const headers = {
        Authorization: `Basic ${btoa(
          `${credentials.email}:${credentials.password}`
        )}`
      }
      const { data } = await axios.post(
        `${backendURL}/auth/login`,
        {},
        { headers }
      )
      // store user's token in local storage
      console.log("user logged in " + data)

      return data
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)
