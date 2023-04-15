import React from "react"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { registerUser } from "../../reducers/auth/authActions"

const Register = () => {
  const { loading, userInfo, error, success } = useSelector(
    (state) => state.auth
  )
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()

  useEffect(() => {
    if (success) {
      Router.push("/")
    }
  }, [])
  const submitForm = (data) => {
    // transform email string to lowercase to avoid case sensitivity issues in login
    data.email = data.email.toLowerCase()
    dispatch(registerUser(data))
  }
  return (
    <div>
      <h1>Login Component</h1>
      <form onSubmit={handleSubmit(submitForm)}>
        {error && <Error>{error}</Error>}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-input"
            {...register("email")}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-input"
            {...register("password")}
            required
          />
        </div>
        <button type="submit" className="button" disabled={loading}>
          {loading ? "Loadiing" : "Register"}
        </button>
      </form>
    </div>
  )
}

export default Login
