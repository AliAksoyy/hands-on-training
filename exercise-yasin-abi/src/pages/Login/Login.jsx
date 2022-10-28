import React from 'react'
import {useState} from "react"


const Login = () => {
  const [loginValues, setLoginValues] =useState({
    username:"",
    email:"",
    password:""
  });

  const handleFormValues =(e) => {
    setLoginValues({...loginValues, [e.target.name]: e.target.value})
  } 

  const handleSubmit =(e)=> {
    e.preventDefault();
    //!LocalStorage karşılatırma sonrası home sayfasına yönlendirme yapacağız
  }

  return (
    <div >
      <h1 >CONTACT FORM</h1>
      
      <form onSubmit={(e) => handleSubmit(e)}>

        <div >
          <label htmlFor="username" >
            Username
          </label>
          <input
            name="username"
            type="text"
            
            id="username"
            placeholder="Enter your username"
            value={loginValues.username}
            onChange={handleFormValues}
          />
        </div>
        <div >
          <label htmlFor="email" >
            Email
          </label>
          <input
            name="email"
            type="email"
            
            id="email"
            placeholder="Enter your email"
            value={loginValues.email}
            onChange={handleFormValues}
          />
        </div>

        <div >
          <label htmlFor="password" >
            Password
          </label>
          <input
            name="password"
            type="password"
            
            id="password"
            placeholder="Enter your password"
            value={loginValues.password}
            onChange={handleFormValues}
          />
        </div>
        <div >
          <button >Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Login