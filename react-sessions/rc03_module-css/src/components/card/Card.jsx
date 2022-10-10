
import CardStyle from "./card.module.css"
import React from "react"
import Buton from "../button/Buton"



 function Card({language, btn, img}) {
  // console.log(props);
  // const {language, btn, img} = props
  return (
    <div >
      <h1 className={CardStyle["title"]}>{language}</h1>
      <img className={CardStyle["images"]} src={img} alt="" />

    <Buton btn={btn} />
    </div>
  )
}

export default Card
