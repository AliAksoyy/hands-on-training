import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import People from "./pages/People";
import NotFound from "./pages/NotFound";
import {Routes, Route} from "react-router-dom"
import Path from "./pages/Path";
import {PersonDetail} from "./pages/PersonDetail"

function App() {
  return (
    <div>
      <Nav />
      <Routes>
         <Route path="/" element={ < Home /> }/>
         <Route path="/people" element={ < People /> }/>
         <Route path="/people/:id" element= {<PersonDetail  />} />
         <Route path="/path" element={ < Path /> }/>
         <Route path="/contact" element={ < Contact /> }/>
         <Route path="*" element={ < NotFound /> }/>
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
