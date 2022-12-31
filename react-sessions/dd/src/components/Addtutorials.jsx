import React from 'react'

const Addtutorials = () => {
  return (
    <div className='container mt-4 p-3 text-center'>
        <h1 className='dispaly-4 text-danger'>Add Your Tutorials</h1>
        <form>
            <label htmlFor="title">Title</label>
            <input
            type="text"
            id='title'
            name='title'
            className='form-control'
            required
            />
            <label htmlFor="title">Description</label>
            <input
            type="text"
            id='description'
            name='description'
            className='form-control'
            required
            />
            <button className='btn btn-danger mt-2'>Submit</button>
        </form>
    </div>
  )
}

export default Addtutorials