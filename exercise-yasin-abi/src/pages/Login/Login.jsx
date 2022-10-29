import React, { useState } from 'react'
import { LoginBody, LoginButton, LoginDiv, LoginImg } from './Login.style'
import LoginImage from "../../assets/meal2.svg"

export const Login = () => {
  const [username,setUsername] =useState("")
  const [password,setPassword] =useState("")
  const [login,setLogin] = useState({
    username:"",
    password:""
  });
 
  const handleSubmit=(e) => {
        e.preventDefault()
        setLogin({...login, username, password})
        setUsername("")
        setPassword("")

  }
  console.log(login)

  return (
    <>
      <LoginBody>
        <LoginDiv>
          <LoginImg src={LoginImage} />
          <form>
            <input type={"text"} 
            placeholder={"enter your a recipe"} 
            style={{display:"block",width:"188px",padding:"0.34rem"}}
            onChange={(e)=> setUsername(e.target.value)}
            value={username}
            />
            <input type={"password"} 
            placeholder={"enter your a password"}
            style={{display:"block", width:"188px",margin:"1rem 0", padding:"0.34rem"}}
            onChange={(e)=> setPassword(e.target.value)}
            value={password}
            />
            <LoginButton onClick={handleSubmit}>Login</LoginButton>
          </form>
        </LoginDiv>
      </LoginBody>
    </>
  )
}

