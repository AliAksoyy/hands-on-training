import React from 'react'

const Card = ({id,title,desc,image}) => {
   
    
  return (
  
    <div  className="card">
    <div className="card-body">
    <p className="title">{title}</p>
    </div>
    <img src={image} className="image" alt="img"/>
    <div className="card-over">
       <p> {desc}</p>
    </div>
    
  </div>
  )
}

export default Card