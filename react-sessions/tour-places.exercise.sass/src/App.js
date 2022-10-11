
import "./App.scss"
import Navbar from "../src/components/Navbar/Navbar.jsx"
import Header from "./components/Header/Header"
import {Main as M} from  "../src/components/Main/Main"

const App = function() {

  return(
    <div className="App">
      <Navbar />
      <Header />
      <M />
     
    </div>
  )
}

export default App
