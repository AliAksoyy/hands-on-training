
import { useState } from "react"
import "../src/App.css"

const App = () => {
  const [input, setInput] = useState("");

  const ali = (e)=> {
    e.preventDefault()
    console.log("ali")
    alert (`name is ${input}`)
    setInput("")
  }
  const beyda = (e) => {
    setInput(e.target.value)
  }

  return (
    <div className="App">
        <form onSubmit={ali}>
          <label htmlFor="name">Name : </label>
          <input type="text" name="name" id="name" value= {input} onChange={beyda}/>
          <button >Sub</button>
          <span>{input}</span>
        </form>

      
    </div>
  )
}

export default App
