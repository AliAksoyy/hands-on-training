import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AddTask = ({getData}) => {

  const [task,setTask]=useState({})

const handleChange = (e)=> {
  setTask({...task, [e.target.id]:e.target.value})
}



const handleSubmit = (e) => {
  e.preventDefault()
  postData(task)
  
  setTask({})
}

const postData=async(a)=> {
  const url = "https://63b118c86a74151a1bcae4be.mockapi.io/api/task"
  try{
  await axios.post(url,a)
  }catch(err){
    console.log(err);
  }
}

  return (
    <div className='text-center mt-2'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="task">Task</label>
        <input type="text" id='task' name='task' placeholder='Enter Task' className='form-control' required onChange={handleChange} value={task?.task || ""}/>
        <label htmlFor="task">Date</label>
        <input type="date" id='date' name='date' placeholder='Enter date' className='form-control' required onChange={handleChange} value={task?.date || ""}/>
        <div className='d-flex justify-content-center'>
        <button type='submit' className='btn btn-danger mt-2'>SAVE</button>
        </div>
      </form>
    </div>
  )
}

export default AddTask