import { Msg } from "./Msg"


const Person = (props) => {
console.log(props) 
    return(
        <div>
            <Msg name={props.name}/>
            
            <img src={props.img} alt="" />
            <p>{props.tel}</p>
        </div>
    )
} 

export default Person