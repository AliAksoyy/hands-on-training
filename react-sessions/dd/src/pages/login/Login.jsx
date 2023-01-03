import React, { useState } from 'react'
import { Button, Content, DivStyle, Image, Input } from "./Login.style"
import img from "../../assets/meal2.svg"
import { useNavigate } from 'react-router-dom'


const Login = () => {

  const [info,setInfo]=useState({})

  const navigate=useNavigate()

  const handleChange=(e)=> {
    setInfo({...info, [e.target.id]:e.target.value })
  }

  const handleSubmit =(e)=> {
    e.preventDefault()
    console.log(info)
    navigate("/")
  }

  return  <DivStyle>
              <Content>
                <Image src={img} />
                <h3 style={{color:"white", marginBottom:".5rem"}}>ED8EN RECIPE`</h3>
                <form style={{textAlign:"center"}} onSubmit={handleSubmit}>
                <Input
                  ali
                  type="text"
                  id="user"
                  name="user"
                  placeholder='Username...'
                  value={info?.user || ""}
                  onChange={handleChange}
                />
                <Input 
                  type="password"
                  id="password"
                  name="password"
                  placeholder='Password...'
                  value={info?.password || ""}
                  onChange={handleChange}
                />
                <Button type='submit'>Login</Button>
                </form>         
              </Content>
          </DivStyle>
  
}

export default Login