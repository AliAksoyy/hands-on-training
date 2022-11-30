import axios from axios
import { useState } from 'react'
import InputForm from '../components/InputForm'
import TodoList from '../components/TodoList'

const url = "https://63518214dfe45bbd55c21ca7.mockapi.io/todos"

interface TodoType {
    id: string | number;
    task:string;
    isDone:boolean;
}


const Home = () => {


    const [todos,setTodos]=useState<TodoType[]>([])



  return (
    <div>
        <InputForm />
        <TodoList />
    </div>
  )
}

export default Home