import React from 'react'
import AppRouter from './routes/AppRouter'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'



const App = () => {

const theme = {
  colors:{
    body:"#e21",
    header:"#a31",
  },
  responsive:"500px",
}



  return (
    <div>
    <BrowserRouter>
    <ThemeProvider theme={theme}>
     <AppRouter />
    </ThemeProvider> 
    </BrowserRouter>
    </div>
  )
}

export default App