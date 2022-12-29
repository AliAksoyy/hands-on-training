
import Button from "../button/Button"
import "./Card.css"

const Card =function({languages,btnName,img}){
  
    return(
        <div>
        <h1>{languages}</h1>
        <img src={img} alt="img" />
        <Button btnName={btnName} />
        </div>
    )
}

export default Card