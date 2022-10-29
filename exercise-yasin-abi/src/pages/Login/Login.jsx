import React, { useState } from 'react'
import { LoginBody, LoginButton, LoginDiv, LoginImg } from './Login.style'
import LoginImage from "../../assets/meal2.svg"
import { useNavigate } from 'react-router-dom'

export const Login = () => {
  const navigate=useNavigate()
  
  const [login,setLogin] = useState({
    username:"",
    password:""
  });
 
  const handleSubmit=(e) => {
        e.preventDefault()
         console.log(login)
         if(JSON.parse(localStorage.getItem("ali")).username ===login.username || JSON.parse(localStorage.getItem("ali")).password ===login.password ) {
          navigate("/home")
         }else {
          navigate("/")
         }
         setLogin({
          username:"",
          password:""
         });
  }
  console.log(JSON.parse(localStorage.getItem("ali")))

  return (
    <>
      <LoginBody>
        <LoginDiv>
          <LoginImg src={LoginImage} />
          <form>
            <input type={"text"} 
            name={"username"}
            placeholder={"enter your a username"} 
            style={{display:"block",width:"188px",padding:"0.34rem"}}
            onChange={(e)=> setLogin({...login, [e.target.name]:e.target.value})}
            value={login.username}
            />
            <input type={"password"} 
            name={"password"}
            placeholder={"enter your a password"}
            style={{display:"block", width:"188px",margin:"1rem 0", padding:"0.34rem"}}
            onChange={(e)=> setLogin({...login, [e.target.name]:e.target.value})}
            value={login.password}
            />
            <LoginButton onClick={handleSubmit}>Login</LoginButton>
          </form>
        </LoginDiv>
      </LoginBody>
    </>
  )
}

