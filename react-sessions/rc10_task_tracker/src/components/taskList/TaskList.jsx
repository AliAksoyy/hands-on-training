import React from 'react'
import {MdDeleteForever} from "react-icons/md"

const TaskList = ({task}) => {
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
           size={20} />
          </div>
        </div>
      )
    })}
    
    </div>
  )
}

export default TaskList
