import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { GlobalStyle } from '../style/GlobalStyle'
import Home from "../pages/home/Home"
import Login from "../pages/login/Login"
import Detail from "../pages/detail/Detail"
import About from "../pages/about/About"

const AppRouter = () => {
  return (

    <BrowserRouter>
    <GlobalStyle />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<About />} />
      <Route path="/detail" element={<Detail />} />
    </Routes>
     
    </BrowserRouter>
  )
}

export default AppRouter
