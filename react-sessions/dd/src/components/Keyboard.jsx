import React, { useState } from 'react'

const Keyboard = () => {
    let ali=  /\d/g
    const [text,setText]=useState("")
  return (
    <div className='container text-center mt-4'>
   <h1>event</h1>
   <input value={text.toLocaleUpperCase()} onChange={(e)=> {!e.target.value.match(ali) && setText(e.target.value)}} type="text" className='form-control' name='text' id='text' />
   <p>{text.toUpperCase()}</p>
    </div>
  )
}

export default Keyboard