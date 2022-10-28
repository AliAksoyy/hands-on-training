import React from 'react'
import {Routes, Route} from "react-router-dom"
import { About } from '../pages/About/About'
import { Home } from '../pages/Home/Home'
import { PrivateRouter } from './PrivateRouter'
import {Details} from "../pages/Details/Details"
import { Login } from '../pages/Login/Login'
import { Register } from '../pages/Register/Register'




export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/private" element={<PrivateRouter />}>
        <Route path="about" element={<About />} />
        <Route path="details" element={<Details />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}

