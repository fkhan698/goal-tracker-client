import { useEffect } from "react"
import LoginForm from "./Login/LoginForm"
import Register from "./RegisterUser"
import { useGetUserDetailsQuery } from "../services/auth/authService"
import { useDispatch, useSelector } from "react-redux"
import { setCredentials } from "../reducers/authSlice"

const HomePage = () => {
  const { user } = useSelector((state) => state.auth)

  const dispatch = useDispatch()

  const { data, isFetching } = useGetUserDetailsQuery("userDetails", {
    pollingInterval: 900000
  })

  useEffect(() => {
    if (data) dispatch(setCredentials(data))
    console.log(data)
  }, [data, dispatch])

  return (
    <div>
      <span>
        {isFetching
          ? `Fetching your profile...`
          : user !== null
          ? `Logged in as ${user.email}`
          : "You're not logged in"}
      </span>
    </div>
  )
}

export default HomePage
