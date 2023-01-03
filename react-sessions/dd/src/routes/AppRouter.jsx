import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import About from '../pages/about/About'
import Details from '../pages/detail/Details'
import Home from '../pages/home/Home'
import Login from '../pages/login/Login'
import PrivateRouter from './PrivateRouter'




const AppRouter = () => {




  return (
    <>
    <Navbar />
    <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<PrivateRouter />} >
            <Route index element={<About />} />    
        </Route>
        <Route path='details' element={<PrivateRouter />}>
            <Route index element={<Details />} />
        </Route>
    </Routes>
    </>
  )
}

export default AppRouter