import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import People from "./pages/People";
import NotFound from "./pages/NotFound";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/instructors" element={<People />} />
       
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Home />
      <People />
      <Contact />
      <NotFound />
      <Footer />
    </>
  );
}

export default App;
