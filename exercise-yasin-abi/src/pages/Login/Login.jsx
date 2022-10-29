import React, { useState } from 'react'
import { LoginBody, LoginButton, LoginDiv, LoginImg } from './Login.style'
import LoginImage from "../../assets/meal2.svg"
import { useNavigate } from 'react-router-dom'
let counter = 0
export const Login = () => {
  const navigate=useNavigate()
  
  const [login,setLogin] = useState({
    username:"",
    password:""
  });
 
  const handleSubmit=(e) => {
        e.preventDefault()

        const localValues =Object.values(localStorage).map((item)=> JSON.parse(item))

        if(!localValues.some((item)=> item.username === login.username) || !localValues.some((item)=> item.password === login.password)) {
          counter++
         
            document.querySelector(".ali").textContent = ` kardeş hakkın ${3 -counter} kaldı`
            
         
            if(counter ===3) {
              setTimeout(() => {
              navigate("/")
                
              }, 3000);
            }
        }else {
          document.querySelector(".ali").textContent = ` home gidiyorsun tebrikler`
          setTimeout(() => {
          navigate("/home")
            
          }, 3000);
        }






         setLogin({
          username:"",
          password:""
         });
  }


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
            <h1 className='ali'></h1>
          </form>
        </LoginDiv>
      </LoginBody>
    </>
  )
}

