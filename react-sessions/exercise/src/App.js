



import { useState } from "react"
import "../src/App.css"

const App = () => {

  const [count, setCount] = useState({
    name:"ali",
    surname:"aksoy",
    age:32
  })


 
 
    
    
  
  



  return (
    <div className="App">
    <h2>{count.name}</h2>
    <h2>{count.surname}</h2>
    <p> {count.age}</p>
    <button onClick={()=> setCount({...count, age: count.age<35 ? (count.age +1) : (count.age -1)})}>Inc</button>
    
   </div>
  )
}


export default App
