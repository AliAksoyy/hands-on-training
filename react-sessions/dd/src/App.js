import Header from "./components/Header";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    header:"#f23",
    body:"#eee",
    footer: "#8a1c4a"

  },
  margin:"1rem",
}




const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <Header />
    </ThemeProvider>
  );
};

export default App;
