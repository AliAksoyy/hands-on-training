import React, { useState } from "react";
import FuncComp from "./FuncComp";



export default function App() {
  const [toggle, setToggle] = useState(true)

  const toggler = () => {
    setToggle(!toggle)
  }
 return(
  <div>
    <h1>Ali Akosy</h1>
    <button onClick={toggler}>Toggle</button>
    {toggle && <FuncComp />}

  </div>
 )
  
}