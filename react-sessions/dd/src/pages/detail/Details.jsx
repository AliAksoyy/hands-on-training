import React from 'react'
import { useLocation } from 'react-router-dom'
import ali from "../../assets/diet.svg"
import { Image } from './Details.style'

const Details = () => {
  
  const {state:{recipe}}=useLocation()
 const {label,image,digest,ingredients}=recipe

 console.log(digest);
  return (
    <div style={{backgroundColor:"#72e", minHeight:"90vh"}} className="d-flex,flex-direction-column">
    <div className='d-flex justify-content-around align-items-center pt-5'>
      <h2>{label}</h2>
      <Image src={ali}  />
    </div>
    <div style={{border:"2px solid white",width:"85%", margin:"3rem auto 0"}} className="d-flex justify-content-around g-3 align-items-center">
      <div>
      <p>Nutrients</p>
        {digest?.slice(0,6).map((item,i)=> {
          const {label,total,unit}=item
          return(
            <p key={i}>{label}: {total.toFixed(2)}{unit}</p>
          )
        })}
      </div>
      <div><Image src={image} alt="" /></div>
      <div>
        {ingredients?.slice(0,6).map((item,i)=> {
          return(
              <p key ={i}>{item.text}</p>
          )
        })}
      </div>
    </div>
    </div>
  )
}

export default Details

