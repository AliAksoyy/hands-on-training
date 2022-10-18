import React, { useState } from 'react'
import Ali from './Ali'

const App = () => {
  const [first, setFirst] = useState(false)
  const btn = () => {
    setFirst(!first)
  }
  return (
    <div>
      <h1>Ali Aksoy</h1>
      <button onClick={btn}>Toggle</button>
      {first && <Ali />}
    </div>
  )
}

export default App