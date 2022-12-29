
import Button from "../button/Button"
import CardStyle from "./card.module.css"

const Card =function({languages,btnName,img}){
  
    return(
        <div>
        <h1 className={CardStyle["hover-btn"]}>{languages}</h1>
        <img src={img} alt="img" />
        <Button btnName={btnName} />
        </div>
    )
}

export default Card