import AppRouter from "./router/AppRouter"
import { BrowserRouter } from "react-router-dom"
import { createTheme,ThemeProvider } from "@mui/system"
import { pink, purple, red, teal } from "@mui/material/colors"


const App=()=> {

  const theme=createTheme({
    paletta:{
      primary:purple[500],
      secondary:red[500],
      danger:pink[400],
      warning:teal[400]
    },
  


  })


  return(
    <BrowserRouter >
    <ThemeProvider  theme={theme}>
       <AppRouter />
    </ThemeProvider>
    </BrowserRouter>
  )
}
export default App