import React, { useState } from 'react'
import { RegisterButton, RegisterDiv } from './Register.style'

export const Register = () => {
  
  const [register, setRegister] = useState({
    registerUsername:"",
    registerEmail:"",
    registerPassword:""
  });

  const handleRegister=(e)=> {
        e.preventDefault()
        setRegister({...register,  })
        console.log(register)
        localStorage.setItem(new Date().getTime(), JSON.stringify({...register}))
        setRegister({
        registerUsername:"",
        registerEmail:"",
        registerPassword:""
      })

  }
  
  return (
    <RegisterDiv>
      <h2 style={{margin:"1rem 0", fontSize:"2.5rem"}}>Register</h2>
     
      <form   style={{border:"1px solid white", padding:"2rem"}}>
            <input type={"text"} 
            name={"registerUsername"}
            placeholder={"enter your a username"} 
            style={{display:"block",width:"188px",padding:"0.34rem"}}
            onChange={(e)=> setRegister({...register, [e.target.name]: e.target.value})}
            value={register.registerUsername}      
            />
            <input type={"email"} 
            name={"registerEmail"}
            placeholder={"enter your an email"} 
            style={{display:"block",width:"188px",padding:"0.34rem", margin:"1rem 0"}}
            onChange={(e)=> setRegister({...register, [e.target.name]:e.target.value})}
            value={register.registerEmail}
            />
            <input type={"password"} 
            name={"registerPassword"}
            placeholder={"enter your a password"}
            style={{display:"block", width:"188px",margin:"1rem 0", padding:"0.34rem"}}
             onChange={(e)=> setRegister({...register, [e.target.name]:e.target.value})}
             value={register.registerPassword}
            />
            <RegisterButton onClick={handleRegister} >Register</RegisterButton>
          
      </form>
    </RegisterDiv>
  )
}

