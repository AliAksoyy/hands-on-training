import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import About from './components/About'
import Footer from './components/Footer'
import Nav from './components/Nav'
import Home from './page/Home'
import Instructors from './page/Instructors'
import NotFound from './page/NotFound'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/instructors' element={<Instructors />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App