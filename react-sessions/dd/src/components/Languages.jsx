import React, { useState } from 'react'
import { Container, Image } from 'react-bootstrap'

const Languages = ({name,img,options}) => {

  const [toggle,setToggle]=useState(false)
 
  return (
    
      <Container onClick={()=> setToggle(!toggle)} style={{background:"#aee432", padding:"1rem",borderRadius:"10px"}}>
      {!toggle && <>
        <Image width="65%" src={img} />
        <h2>{name}</h2> 
      </>
       }
       {toggle && <>
        <ul>
          {options.map((item)=> {
            return(
              <li>{item}</li>
            )
          })}
        </ul>
       </>}
      </Container>
      
    
  )
}

export default Languages