



import { useState } from "react"
import "../src/App.css"

const App = () => {

  const [count, setCount] = useState({
    name:"ali",
    surname:"aksoy",
    age:32
  })
  console.log(count);





  return (
    <div className="App">
    <h2>{count.name}</h2>
    <h2>{count.surname}</h2>
    <p> {count.age}</p>
    <button >Inc</button>
    
   </div>
  )
}

export default App
