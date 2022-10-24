import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home" 
import About from "./pages/About" 
import Book from "./pages/Book" 
import BookList from "./pages/BookList" 
import Contact from "./pages/Contact" 
import NewBook from "./pages/NewBook" 
import NotFound from "./pages/NotFound" 

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/book" element={<Book/>} />
        <Route path="/booklist" element={<BookList/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/newbokk" element={<NewBook/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>

    </div>
  )
}

export default App