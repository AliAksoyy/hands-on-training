import React, { useState } from 'react'

const Addtutorials = () => {

    const [info,setInfo]=useState({})

const handleChange = (e)=> {
    setInfo({...info, [e.target.id]:e.target.value})
}

const handleSubmit = (e)=> {
   e.preventDefault()
    console.log(info);
    setInfo({})
}

  return (
    <div className='container mt-4 p-3 text-center'>
        <h1 className='dispaly-4 text-danger'>Add Your Tutorials</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
            <input
            type="text"
            id='title'
            name='title'
            className='form-control'
            value={info.title || ""}
            onChange={handleChange}
            required
            />
            <label htmlFor="title">Description</label>
            <input
            type="text"
            id='description'
            name='description'
            className='form-control'
            value={info.description || ""}
            onChange={handleChange}
            required
            />
            <button type="submit" className='btn btn-danger mt-2'>Submit</button>
        </form>
    </div>
  )
}

export default Addtutorials