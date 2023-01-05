import AppRouter from "./router/AppRouter"
import { BrowserRouter } from "react-router-dom"
import { createTheme,ThemeProvider } from "@mui/material/styles"
import { pink, purple, red, teal } from "@mui/material/colors"


const App=()=> {

  const theme=createTheme({
    paletta:{
      primary:{main:purple[500]},
      secondary:{main:red[500]},
      danger:{main:pink[400]},
      warning:{main:teal[400]},
    }
  })




  return(
    <BrowserRouter >
    <ThemeProvider theme={theme}>

       <AppRouter />
    </ThemeProvider>
    </BrowserRouter>
   
  )
}
export default App