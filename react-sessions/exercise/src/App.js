import React, { useState } from "react";
import FuncComp from "./FuncComp";



export default function App() {
  const [first, setFirst] = useState(false)
  const tog = () => {
    setFirst(!first)
  }
  
 return(
  <div>
    <h1>ali</h1>
    <button onClick={tog}>toggle</button>
  {first || <FuncComp />}
  </div>
 )
  
}