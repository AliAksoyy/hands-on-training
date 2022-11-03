import React from 'react'
import { AliDiv, LoginForm, LoginDiv } from './Register.style'


const Login = () => {
  return (
    <LoginDiv>
    <AliDiv>
      
      <LoginForm>
        <input style={{backgroundColor:"rgba(0,0,0,0.7)", outline:"none"}} type="text" placeholder='username'/>
        <input style={{backgroundColor:"rgba(0,0,0,0.7)", outline:"none"}} type="email" placeholder='email'/>
        <input style={{backgroundColor:"rgba(0,0,0,0.7)", outline:"none"}} type="password" placeholder='pasword' />
        <button style={{width:"10rem"}}>LOGIN</button>
      </LoginForm>

    </AliDiv>
    </LoginDiv>
  )
}

export default Login