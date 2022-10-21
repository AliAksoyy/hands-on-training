import React,{useState,useEffect} from "react";
import AddTask from "../components/addTask/AddTask";
import TaskList from "../components/taskList/TaskList";
import Button from "react-bootstrap/Button"
import axios from "axios";

const Home = () => {
  const [isOpen,setIsOpen]=useState(false)
  const [text,setText]=useState("Show Task Bar")
  const [task,setTask]= useState([]);
  const url="https://63518214dfe45bbd55c21ca7.mockapi.io/api/v1/task"

  const toggle=()=>{
    setIsOpen(!isOpen);
    const buttonText=isOpen ? "Show Task Bar" : "Hide Task Bar"
    setText(buttonText);
  }

  // CRUD  -READ--
  const getTask=async()=>{
    const {data}=await axios(url)
    setTask(data);
    console.log(data)
    
  }

  useEffect(() => {
    getTask()
  },[])

  return (
    <div>
      <Button 
      onClick={()=>{toggle()}}
      className="form-control"
      size="lg"
      variant="danger">{text}</Button>
      { isOpen && <AddTask  getTask={getTask}/>}
     
      <TaskList getTask={getTask} task={task}/>
    </div>
  );
};

export default Home;
