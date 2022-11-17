import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Contacts from "./components/contacts/Contacts";
import FormComponent from "./components/form/FormComponent";
import { AddUser, updateUser} from "./utils/functions";

const initialValues={
  username:"",
  phoneNumber:"",
  gender:"",
}

function App() {

  const [info,setInfo]=useState(initialValues)

  const handleSubmit = (e) => {
      e.preventDefault()
      if(info.id){
        updateUser(info)
      }else {
      AddUser(info)

      }
       }

       const editUser = ({username,id,phoneNumber,gender}) => {
          setInfo({id,username,phoneNumber,gender})
       }

  return (
    <div className="App">
      <ToastContainer />
      <FormComponent info={info} setInfo={setInfo} handleSubmit={handleSubmit} />
      <Contacts editUser={editUser}/>
    </div>
  );
}

export default App;
