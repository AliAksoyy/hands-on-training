import React from 'react'
import { AliDiv, LoginForm, LoginDiv } from './Login.style'
import beyda from "../../assets/meal.svg"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Login = () => {
  const navigate =useNavigate()

  const [login,setLogin] =useState({
    username:"",
    password:""
  });

const handleSubmit =(e) => {
  e.preventDefault()
  const localvalue =Object.values(localStorage).map((item)=> JSON.parse(item))

  if(localvalue.some((item)=> item.username === login.username || localvalue.some((item)=> item.password === login.password))) {
    document.querySelector(".loginshow").innerText = `onaylandınız `
    navigate("/home")

  }else {
    document.querySelector(".loginshow").innerText = `bilgiler hatalı tekrar register olunuz `
    setTimeout(() => {
      navigate("/")
    }, 2000);
  }

  setLogin({
    username:"",
    password:""
  });

}




  return (
    <LoginDiv>
    <AliDiv>
      <img style={{width:"100px"}} src={beyda} alt="d" />
      <h5 className='loginshow'>Lorem ipsum dolor sit amet consectetur.</h5>
      <LoginForm onSubmit={handleSubmit}>
        <input onChange={(e)=> setLogin({...login, username:e.target.value}) }  value={login.username} style={{backgroundColor:"rgba(0,0,0,0.7)", outline:"none"}} type="text" placeholder='username'/>
        <input  onChange={(e)=> setLogin({...login, password:e.target.value}) }  value={login.email} style={{backgroundColor:"rgba(0,0,0,0.7)", outline:"none"}} type="password" placeholder='pasword' />
        <button type='submit' style={{width:"10rem"}}>LOGIN</button>
      </LoginForm>

    </AliDiv>
    </LoginDiv>
  )
}

export default Login