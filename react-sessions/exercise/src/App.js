



import { useState } from "react"
import "../src/App.css"

const App = () => {

  const [msg, setMsg] = useState("React")

 const deg = (e)=> {
  setMsg(e.target.previousElementSibling.value)
  
 }
  
 

  return (
    <div>
    <h2>hello {msg} </h2>
    <p>isim gir</p>
    <input type="text"  />
    <button onClick={deg}> click me</button>
   </div>
  )
}


export default App
