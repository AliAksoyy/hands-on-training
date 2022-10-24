import React from 'react'
import Home from './pages/Home'


import { Link,NavLink, Routes,Route } from 'react-router-dom'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import NotFound from './pages/NotFound'
import "./App.css"

const App = () => {
  return (
    <>
    <nav>
       <NavLink to="/" className={({isActive})=> isActive && 'aktif'}>Anasayfa</NavLink>
       <NavLink to="/contact" style={({isActive})=> 
       ({backgroundColor: isActive && "yellow"})
       }>Contact</NavLink>
       <NavLink to="/blog"> {({isActive})=> (
            <>
              Blog
              {isActive && '(aktif)'}
            </>
       )}</NavLink>
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