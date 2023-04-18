import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import LoginForm from "./components/Login/LoginForm"
import Register from "./components/RegisterUser"
import HomePage from "./components/HomePage"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<Register />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
