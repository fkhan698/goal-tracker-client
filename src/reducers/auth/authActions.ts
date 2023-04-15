import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const backendURL = "http://localhost:8000"

export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ email, password }: any, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json"
        }
      }
      const { data } = await axios.post(
        `${backendURL}/auth/login`,
        { email, password },
        config
      )
      // store user's token in local storage
      console.log("user logged in" + data.userToken)
      localStorage.setItem("userToken", data.userToken)

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
