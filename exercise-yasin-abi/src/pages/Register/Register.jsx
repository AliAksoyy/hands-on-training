import React from 'react'
import { RegisterButton, RegisterDiv } from './Register.style'

export const Register = () => {
  return (
    <RegisterDiv>
      <h2 style={{margin:"1rem 0", fontSize:"2.5rem"}}>Register</h2>
     
      <form style={{border:"1px solid white", padding:"2rem"}}>
            <input type={"text"} 
            placeholder={"enter your a username"} 
            style={{display:"block",width:"188px",padding:"0.34rem"}}
            // onChange={(e)=> setUsername(e.target.value)}
            // value={username}
            />
            <input type={"email"} 
            placeholder={"enter your an email"} 
            style={{display:"block",width:"188px",padding:"0.34rem", margin:"1rem 0"}}
            // onChange={(e)=> setUsername(e.target.value)}
            // value={username}
            />
            <input type={"password"} 
            placeholder={"enter your a password"}
            style={{display:"block", width:"188px",margin:"1rem 0", padding:"0.34rem"}}
            // onChange={(e)=> setPassword(e.target.value)}
            // value={password}
            />
            <RegisterButton >Register</RegisterButton>
          
      </form>
    </RegisterDiv>
  )
}

