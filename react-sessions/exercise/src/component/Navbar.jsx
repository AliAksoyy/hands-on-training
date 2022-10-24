import React from 'react'
import {Link, NavLink} from "react-router-dom"

const Navbar = () => {
  return (
    <div>

        <nav>
            <ul style={{display:"flex", justifyContent:"space-between", margin:"0.4rem"}}>
            <li>   <Link to="/">Home</Link></li>
            <li> <Link to="/about">About</Link></li>
            <li> <Link to="/book">Book</Link></li>
            <li>  <Link to="/contact">Contact</Link></li>
           
                
                 
                   
                   
                  
                  
                   
                
            </ul>
        </nav>

    </div>
  )
}

export default Navbar