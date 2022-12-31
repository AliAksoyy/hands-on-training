
import React from 'react'
import { Container } from 'react-bootstrap'
import Card from "./components/Card"
import Header from './components/Header'
import "./index.css"



const App = () => {
  return (
    <Container className="text-center mt-5 p-4">
      <Header />
      <Card />
    
    </Container>
  )
}

export default App