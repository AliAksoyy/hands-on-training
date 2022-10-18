import { useState } from "react";
import { LifeCycle } from "./componentsi/LifeCycle";



function App() {
 const [first, setFirst] = useState(false)
  const handleShow = () => {
    setFirst(!first)
  }
  return (
    <div className="container text-center mt-4">
      <button onClick={handleShow} className="btn btn-danger">{first ? "show" : "hide"}</button>
      {first ||  <LifeCycle /> }
    
    </div>
  );
}

export default App;
