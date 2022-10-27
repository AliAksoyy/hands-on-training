import React from 'react'
import { Button, TomatoButton } from './components/Button'
import Container  from './components/Container'
import HeaderText from './components/HeaderText.styled'

const App = () => {
  return (
    <>
    <Container bg="grey">
      <HeaderText color="hotpink">styled component</HeaderText>
      <Button primary >Save</Button>
      <Button >Clear</Button>
      <TomatoButton>Send</TomatoButton>
      <TomatoButton primary >Submit</TomatoButton>
      </Container>
    </>
  )
}

export default App