import React, { useEffect } from "react"

import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { userLogin } from "../../reducers/auth/authActions"

const LoginForm = () => {
  const isLoggedIn = useSelector((state) => state.auth.user !== null)

  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()

  const submitForm = (data: any) => {
    dispatch(userLogin(data))
    console.log(data)
  }
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/homepage")
    }
  }, [isLoggedIn, navigate])
  return (
    <form onSubmit={handleSubmit(submitForm)}>
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
      <button type="submit" className="button">
        Login
      </button>
    </form>
  )
}

export default LoginForm
