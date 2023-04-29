import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import authReducer from "./reducers/authSlice"
import { authApi } from "./services/auth/authService"
const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: { authService: authApi }
      }
    }).concat(authApi.middleware)
})

export default store
