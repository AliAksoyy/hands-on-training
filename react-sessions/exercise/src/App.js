import React from 'react'
import Home from './pages/Home'


import { Link,NavLink, Routes,Route } from 'react-router-dom'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <>
    <nav>
       <Link to="/">Anasayfa</Link>
       <Link to="/contact">Contact</Link>
       <Link to="/blog">Blog</Link>
    </nav>

      <Routes> 
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </>
    
   
  )
}

export default App