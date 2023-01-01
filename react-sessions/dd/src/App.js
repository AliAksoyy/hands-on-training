import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import People from "./pages/People";
import NotFound from "./pages/NotFound";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Path from "./pages/Path";
import PeopleDetails from "./pages/PeopleDetails";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/people" element={ <People />} />
      <Route path="/people/:id" element={<PeopleDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="path/" element={<Path />} />
      <Route path="*" element={ <NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
