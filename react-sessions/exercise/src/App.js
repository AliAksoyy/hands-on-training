

import { useState } from "react"
import "../src/App.css"

const App = () => {


  const [degerlendirme, setDegerlendirme] = useState(false)
  
  const deg = () => {
    // setValue("beyda")
    setDegerlendirme(!degerlendirme)
    console.log(degerlendirme);
  }

  return (
    <div className="App">
    {degerlendirme ? <h1>ali aksoy</h1> : <h1>Beyda</h1> }
    
    <button onClick={deg}>değiştir</button>
      
    </div>
  )
}

export default App
