import React from 'react'
import { Button } from './components/Button.styled'
import { Container } from './components/Container'
import H1 from './components/Header.styled'

const App = () => {
  return (
    <Container>
      <H1 color={"red"}>Ali aksoy</H1>
      <Button primary >Button</Button>
      <Button >Button</Button>
    </Container>
  )
}

export default App