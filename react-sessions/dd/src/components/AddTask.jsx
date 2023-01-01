import React from 'react'

const AddTask = () => {
  return (
    <div className='text-center mt-2'>
      <form>
        <label htmlFor="task">Task</label>
        <input type="text" id='task' name='task' placeholder='Enter Task' className='form-control' required />
        <label htmlFor="task">Date</label>
        <input type="date" id='date' name='date' placeholder='Enter date' className='form-control' required />
        <div className='d-flex justify-content-center'>
        <button type='submit' className='btn btn-danger mt-2'>SAVE</button>
        </div>
      </form>
    </div>
  )
}

export default AddTask