import React from 'react'
import { Div, NavDiv } from './Navbar.style'
import { Image } from '../../pages/login/Login.style'
import img from "../../assets/meal.svg"
import { NLink } from './Navbar.style'
import { useNavigate } from 'react-router-dom'
 
const Navbar = () => {
const navigate=useNavigate()
const user=true








  return (
   <Div>
    <div>
        <Image onClick={()=> navigate("/")} style={{cursor:"pointer"}} ali src={img} />
    </div>
    <NavDiv>
      <NLink to="/">Home</NLink>
      <NLink to="/about">About</NLink>
      <a style={{textDecoration:"none"}} href="https://github.com/AliAksoyy" target="_blank">Github</a>
      {user ?  <NLink to="/register">Logout</NLink> : <NLink to="/login">Login</NLink>  }
     
    </NavDiv>
   </Div>
  )
}

export default Navbar