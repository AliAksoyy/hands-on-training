import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { GlobalStyle } from '../style/GlobalStyle'
import Home from "../pages/home/Home"
import Login from "../pages/login/Login"
import Detail from "../pages/detail/Detail"
import About from "../pages/about/About"
import PrivateRouter from './PrivateRouter'
import Navbar from '../components/nav/Navbar'

const AppRouter = () => {
  return (

    <BrowserRouter>
    <GlobalStyle />
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="about" element={<PrivateRouter />} >
        <Route path="" element={<About />} />
        <Route path="detail" element={<Detail />} />
      </Route>
     
    </Routes>
     
    </BrowserRouter>
  )
}

export default AppRouter
