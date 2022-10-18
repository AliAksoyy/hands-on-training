import React, { useState } from 'react'
import Ali from "./Ali"

const App = () => {
  const [click, setClick] = useState(true)

  return (
    <div>
      <h1>LifeCycle vs useEffect</h1>
      <button onClick={()=> setClick(!click)}>toggle</button>
      {click && <Ali />}
    </div>
  )
}

export default App