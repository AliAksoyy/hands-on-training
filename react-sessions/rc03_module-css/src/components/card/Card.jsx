
import "./Card.css"
import React from "react"
import Buton from "../button/Buton"



 function Card({language, btn, img}) {
  // console.log(props);
  // const {language, btn, img} = props
  return (
    <div>
      <h1>{language}</h1>
      <img src={img} alt="" />

    <Buton btn={btn} />
    </div>
  )
}

export default Card
