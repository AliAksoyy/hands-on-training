import React from 'react'
import { useLocation } from 'react-router-dom'
import { ContentDiv, DetailsDiv } from './Details.style'
import detailImg from "../../assets/home.svg"


const Details = () => {
  const {state} = useLocation()
  console.log(state)
  return (
    <DetailsDiv>
        <div className="d-flex justify-content-between" >
          <h2>{state.label}</h2>
          <img style={{width:"150px", height:"100px"}} className='pe-2' src={detailImg} alt="a" />
        </div>
        <ContentDiv >
          <div>
            {Object.values(state.totalNutrients).map((label, i)=> {
              return(
                <div key={i}>
                <p>{label.label}</p>
                <h6>{Math.floor( label.quantity)}</h6>
                <h6>{label.unit}</h6>
                </div>
               
              )
            })}
          </div>
          <div>
            <img  src={state?.images?.REGULAR?.url} alt="a" />
          </div>
          <div>
              {state.ingredientLines.map((a, i)=> {
                return(
                
                  <p key={i}>{a}</p>
                )
              })}
          </div>
        </ContentDiv>
    </DetailsDiv>
  )
}

export default Details