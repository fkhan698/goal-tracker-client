import React from "react"
import LoginForm from "./Login/LoginForm"
import Register from "./RegisterUser"

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <a href="/login">Login</a>

      <a href="/register">Register</a>
    </div>
  )
}

export default HomePage
