import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import img from "../../assets/meal.svg"
import { Button, Content, DivStyle, Image, Input } from "./Register.style"

const Register = () => {

  const [info,setInfo]=useState({})
  const navigate=useNavigate()
  const handleChange=(e)=> {
    setInfo({...info, [e.target.id]:e.target.value})
  }
  
  const handleSubmit =(e) => {
    e.preventDefault()
    const newArr=[info]
    localStorage.setItem("user", JSON.stringify(newArr))
  navigate("/")
  setInfo({})
  }

  return  <DivStyle>
              <Content>
                <Image src={img} />
                <h3 style={{color:"white", marginBottom:".5rem"}}>ED8EN RECIPE`</h3>
                <form style={{textAlign:"center"}} onSubmit={handleSubmit} >
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
                  alis
                  type="text"
                  id="last"
                  name="last"
                  placeholder='Lastname...'
                  value={info?.last || ""}
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
                <Button type='submit'>register</Button>
                </form>         
              </Content>
          </DivStyle>
  
}

export default Register