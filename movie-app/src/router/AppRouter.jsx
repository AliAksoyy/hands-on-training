import React from 'react'
import {Routes,Route} from "react-router-dom"
import Navbar from "../components/Navbar"
import Main from "../pages/Main"
import Login from "../pages/Login"
import Register from "../pages/Register"
import PrivateRouter from "./PrivateRouter"
import MovieDetail from "../pages/MovieDetail"



const AppRouter = () => {
  return (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="moviedetail" element={<PrivateRouter />} >
          <Route path="" element={<MovieDetail />} /> 
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<Main />} />
        </Routes>
      </>
  )
}

export default AppRouter