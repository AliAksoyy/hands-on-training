import React from 'react'
import {Routes, Route, Link, NavLink} from "react-router-dom"
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'
import Home from './Pages/Home'

const App = () => {
  return (
    <>

    
    <nav>
      <NavLink to="/" className={(isActive)=> isActive && "ali"}>Home</NavLink>
      <NavLink to="/contact" style={({isActive})=> ({
        color: isActive ? 'red' : 'blue'})}>Contact</NavLink>
      <NavLink to="/blog">
      {({isActive})=> (
        <>Blog {isActive && "akitf"}</>
      )}
    </NavLink>
    </nav>


    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/blog' element={<Blog />} />
    </Routes>
    </>
  )
}

export default App