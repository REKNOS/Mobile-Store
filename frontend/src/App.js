import { useState } from "react"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import "./App.css"
import { AppProvider } from "./AppContext"
import Authenticate from "./components/Authenticate"
import Home from "./components/Home"
import Header from "./components/Header"
import Register from "./components/Register"
import Logout from "./components/Logout"

function App() {
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem("user")))

  return (
    <AppProvider currentUser={currentUser}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route element={<Navigate to="/login" />} path="/" />
          <Route element={<Authenticate />} path="login" />
          <Route element={<Register />} path="signup" />
          <Route element={<Home/>} path="Home" />
          <Route element={<Logout />} path="logoutpage" />
          
        </Routes>
      </BrowserRouter>
    </AppProvider>
  )
}

export default App