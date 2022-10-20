import React, { useState } from 'react'
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import axios from 'axios'

const AddTask = ({getTask}) => {

  const [task, setTask] = useState("")
  const [date, setDate] = useState("")

  const handleSubmit =(e)=> {
    e.preventDefault()
    const newTask={task,date }
    console.log(newTask);
    addNewTask(newTask)
    

  }



  const addNewTask = async(newTask) => {

  const url="https://63518214dfe45bbd55c21ca7.mockapi.io/api/v1/task"
    try {
    await axios.post(url, newTask)
      
    } catch (error) {
      console.log(error)
    }
  getTask()

  }


  return (
    <div>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="task">
            <Form.Label>Task</Form.Label>
            <Form.Control onChange={(e)=> setTask(e.target.value)} type="text" placeholder="Enter text" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="date">
            <Form.Label>Date</Form.Label>
            <Form.Control onChange={(e)=> setDate(e.target.value)} type="date" placeholder="Enter Date" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Save
          </Button>
        </Form>
    </div>
  )
}

export default AddTask