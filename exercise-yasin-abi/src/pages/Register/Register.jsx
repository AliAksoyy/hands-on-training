import React, { useState } from 'react'
import { RegisterButton, RegisterDiv } from './Register.style'

export const Register = () => {
  
  const [registerUsername, setRegisterUsername] = useState("")
  const [registerEmail, setRegisterEmail] = useState("")
  const [registerPassword, setRegisterPassword] = useState("")
  const [register, setRegister] = useState({
    registerUsername:"",
    registerEmail:"",
    registerPassword:""
  });

  const handleRegister=(e)=> {
    e.preventDefault()
    setRegister({...register, registerUsername, registerEmail,registerPassword })
    localStorage.setItem(register.registerUsername, JSON.stringify({...register}))
    setRegisterUsername("")
    setRegisterEmail("")
    setRegisterPassword("")
  }
console.log(register)
  
  return (
    <RegisterDiv>
      <h2 style={{margin:"1rem 0", fontSize:"2.5rem"}}>Register</h2>
     
      <form style={{border:"1px solid white", padding:"2rem"}}>
            <input type={"text"} 
            placeholder={"enter your a username"} 
            style={{display:"block",width:"188px",padding:"0.34rem"}}
            onChange={(e)=> setRegisterUsername(e.target.value)}
            value={registerUsername}
            
            />
            <input type={"email"} 
            placeholder={"enter your an email"} 
            style={{display:"block",width:"188px",padding:"0.34rem", margin:"1rem 0"}}
            onChange={(e)=> setRegisterEmail(e.target.value)}
            value={registerEmail}
            

            />
            <input type={"password"} 
            placeholder={"enter your a password"}
            style={{display:"block", width:"188px",margin:"1rem 0", padding:"0.34rem"}}
             onChange={(e)=> setRegisterPassword(e.target.value)}
             value={registerPassword}
            

            />
            <RegisterButton onSubmit={(e)=>handleRegister(e)} >Register</RegisterButton>
          
      </form>
    </RegisterDiv>
  )
}

