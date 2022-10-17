



import { useState } from "react"
import "../src/App.css"

const App = () => {

  const [count, setCount] = useState(0)


 
 
    
    
  
  



  return (
    <div className="App">
    <h2>you clicked {count} times</h2>
    <button onClick={() => setCount(count +1)}> click me</button>
   </div>
  )
}


export default App
