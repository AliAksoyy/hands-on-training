



import { useState } from "react"
import "../src/App.css"

const App = () => {

const [input, setInput] =useState("")

const [name, setName] = useState("React Learn")

const deg = (e) => {
    setInput(e.target.value)
}

const ekle = () => {
  setName(input)
  setInput("")
}
 
  
 

  return (
    <div>
    <h2>hello {name} </h2>
    <p>isim gir</p>
    <input onChange={deg} type="text"  value={input}/>
    <button onClick={ekle}>ekle</button>
    <p>{input}</p>
   </div>
  )
}


export default App
