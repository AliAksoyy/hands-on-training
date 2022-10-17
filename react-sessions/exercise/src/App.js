import React, { useState } from 'react'
import "../src/App.css"

const App = () => {

  const handleChange = (e) => {
    console.log(e.target.value);
  }


  const handleSubmit = (e) => {
      e.preventDefault()
      alert ($`{e.target.value}`)
  }
 

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input id="name" name="name" onChange={handleChange} />
      <button>Submit</button>
    </form>
      
    </div>
  )
}

export default App
