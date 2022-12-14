
import './App.css';
import Form from './components/Form';
import Tables from './components/Tables';
import { collection, getDocs, addDoc } from "firebase/firestore"; 
import { db } from "./utils/firebase"
import { useEffect, useState } from "react"


function App() {

  const [users, setUsers] = useState([])

const addUser = async(username,phone,gender) => {
   
    const docRef = await addDoc(collection(db, "users"), {
      username: username,
      phone: phone,
      gender: gender  
    });
    console.log(docRef)
}

  const getUsers = async()=> {
  
  const data = await getDocs(collection(db, "users"));
      setUsers(data.docs.map((doc)=> ({...doc.data()})));
     
  }
 
  console.log(users)
  
  useEffect(()=> {
    getUsers()
   
  },[])

 




  return (
      <div className='px-5' style={{display:"flex", alignItems:"center", justifyContent:"space-between", height:"100vh",width:"80rem", margin:"0 auto"}}>
        <Form addUser={addUser} />
        <Tables users={users} setUsers={setUsers}/>
      </div>
  );
}

export default App;
