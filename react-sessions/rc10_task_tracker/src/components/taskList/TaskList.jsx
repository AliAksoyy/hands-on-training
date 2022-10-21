import axios from 'axios'
import React from 'react'
import {MdDeleteForever} from "react-icons/md"

const TaskList = ({task,getTask}) => {

  const deleteTask =async(id) => {

  const url="https://63518214dfe45bbd55c21ca7.mockapi.io/api/v1/task"
    try {
    await axios.delete(`${url}/${id}`)
      
    } catch (error) {
      console.log(error);
    }
    getTask()
  }


  return (
    <div>
    {task.map((item)=> {
      const {id, task, date} = item
      return(
        <div key={id} className='mt-2 d-flex justify-content-between bg-secondary rounded-2 p-2'>
          <div>
            <h4>{task}</h4>
            <p>{date}</p>
          </div>
          <div>
          <MdDeleteForever
          onClick={()=>deleteTask(id)}
           size={20} />
          </div>
        </div>
      )
    })}
    
    </div>
  )
}

export default TaskList
