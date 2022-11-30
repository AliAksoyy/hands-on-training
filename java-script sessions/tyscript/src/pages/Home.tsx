import axios from "axios"
import { useEffect, useState } from 'react'
import InputForm from '../components/InputForm'
import TodoList from '../components/TodoList'

const url = "https://63518214dfe45bbd55c21ca7.mockapi.io/todos"



const Home = () => {


    const [todos,setTodos]=useState<TodoType[]>([])

const getTodos = async()=> {
    try {
    const {data} = await axios.get<TodoType[]>(url)
    setTodos(data)
    console.log(todos)
    } catch (err) {
        console.log(err)
    }
}

useEffect(()=> {getTodos()},[])

  return (
    <div>
        <InputForm />
        <TodoList todos={todos}/>
    </div>
  )
}

export default Home