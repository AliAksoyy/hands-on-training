import {BrowserRouter} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import AppRouter from "./Router/AppRouter"
import { GlobalStyle } from "./Style/GlobalStyle.style";
import { theme } from "./Style/theme";




function App() {
  return (
  <ThemeProvider theme={theme} >
    <BrowserRouter>
      <GlobalStyle />
      <AppRouter />
    </BrowserRouter>
  </ThemeProvider>
  );
}

export default App;
