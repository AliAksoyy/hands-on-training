import React from 'react'
import { AliDiv, LoginForm, LoginDiv } from './Login.style'
import beyda from "../../assets/meal.svg"

const Login = () => {
  return (
    <LoginDiv>
    <AliDiv>
      <img style={{width:"100px"}} src={beyda} alt="d" />
      <h5>Lorem ipsum dolor sit amet consectetur.</h5>
      <LoginForm>
        <input style={{backgroundColor:"rgba(0,0,0,0.7)", outline:"none"}} type="text" placeholder='username'/>
        <input style={{backgroundColor:"rgba(0,0,0,0.7)", outline:"none"}} type="password" placeholder='pasword' />
        <button style={{width:"10rem"}}>LOGIN</button>
      </LoginForm>

    </AliDiv>
    </LoginDiv>
  )
}

export default Login