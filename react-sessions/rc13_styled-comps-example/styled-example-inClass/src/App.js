import React from 'react'
import Header from './components/Header'
import { ThemeProvider } from 'styled-components'
const style={
  colors:{
    header:"#333",
    body:"#fff",
    footer:"#8A1C4A"
  }
}

const App = () => {
  return (
    <ThemeProvider theme={style}>
      <Header />
    </ThemeProvider>
  )
}

export default App