import React from 'react'
import {Routes,Route} from "react-router-dom"
import Navbar from "../components/Navbar"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Main from "../pages/Main"
import PrivateRouter from './PrivateRouter'
import MovieDetail from "../pages/MovieDetail"

const AppRouter = () => {
  return (

    <>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Main />} />
        <Route path="/details" element={<PrivateRouter />} >
          <Route index element={<MovieDetail />} />
        </Route>
      </Routes>
    </>
  )
}

export default AppRouter