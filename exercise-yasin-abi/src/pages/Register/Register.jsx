import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { RegisterButton, RegisterDiv } from './Register.style'

export const Register = () => {
  const navigate = useNavigate()
  
  const [register, setRegister] = useState({
    username:"",
    email:"",
    password:""
  });

  const handleRegister=(e)=> {
        e.preventDefault()
        
       const localValues= Object.values(localStorage).map((item)=> JSON.parse(item))
      
       

        setRegister({
        username:"",
        email:"",
        password:""
       
        
      })
    }
  
  
  return (
    <RegisterDiv>
      <h2 style={{margin:"1rem 0", fontSize:"2.5rem"}}>Register</h2>
     
      <form   style={{border:"1px solid white", padding:"2rem"}}>
            <input type={"text"} 
            name={"username"}
            placeholder={"enter your a username"} 
            style={{display:"block",width:"188px",padding:"0.34rem"}}
            onChange={(e)=> setRegister({...register, [e.target.name]: e.target.value})}
            value={register.username} 
            required     
            />
            <input type={"email"} 
            name={"email"}
            placeholder={"enter your an email"} 
            style={{display:"block",width:"188px",padding:"0.34rem", margin:"1rem 0"}}
            onChange={(e)=> setRegister({...register, [e.target.name]:e.target.value})}
            value={register.email}
            required
            />
            <input type={"password"} 
            name={"password"}
            placeholder={"enter your a password"}
            style={{display:"block", width:"188px",margin:"1rem 0", padding:"0.34rem"}}
             onChange={(e)=> setRegister({...register, [e.target.name]:e.target.value})}
             value={register.password}
             required
            />
            <RegisterButton onClick={handleRegister} >Register</RegisterButton>
            <p className='explan'></p>
          
      </form>
    </RegisterDiv>
  )
}

