import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import LoginForm from "./components/Login/LoginForm"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route exact path="/" component={App} />
            <Route path="/login" element={<LoginForm />} />
          </Routes>
        </div>
        hello
      </Router>
    </>
  )
}

export default App
