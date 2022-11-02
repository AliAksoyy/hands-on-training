import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from "../pages/Home/Home"
import About from "../pages/About/About"
import Login from "../pages//Login/Login"
import Register from "../pages/Register/Register"
import PrivateRouter from './PrivateRouter'
import Navbar from '../components/Navbar/Navbar'

const AppRouter = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/private" element={<PrivateRouter />} >
        <Route path="/private/about" element={<About />} />
        <Route path="/private/details" element={<About />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Register />} />
    </Routes>
    </>



  )
}

export default AppRouter