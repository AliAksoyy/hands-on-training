import React from 'react'
import { Div } from './Card.style'
import { useNavigate } from 'react-router-dom';

const Card = ({eats}) => {
  
  const navigate=useNavigate()
  
  return (
   <Div>
      {eats.map((item, i)=> {
        return(
          <div key={i} className="card" style={{ width: "18rem" }}>
            <div className="card-body text-center">
              <h5 className="card-title">{item.recipe.label}</h5>
            </div>
            <img src={item.recipe.image} className="card-img-top" alt="..." />
            <div className="card-body text-center">
              <button onClick={()=> navigate("/details", {state:item} )} className='btn btn-danger'>View</button>
            </div>
      </div>  
        )
      })}
      
    </Div> 
   
  )
}

export default Card