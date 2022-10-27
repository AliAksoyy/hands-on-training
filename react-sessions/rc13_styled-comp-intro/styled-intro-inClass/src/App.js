import React from 'react'
import { Button, TomatoButton } from './components/Button'
import Container  from './components/Container'
import HeaderText from './components/HeaderText.styled'
import StyledLink from './components/Link.styled'


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
      <Container bg="#333">
        <StyledLink href="https://clarusway.com" target="_blank">Clarusway MacBook</StyledLink>
        <StyledLink secondary href="https://reactjs.org" target="_blank">React</StyledLink>
      </Container>

    </>
  )
}

export default App