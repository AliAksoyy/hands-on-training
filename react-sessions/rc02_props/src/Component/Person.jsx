import Msg from "./Msg"

const Person = ({name,img,tel}) => {
    // console.log(props);
    return(
        <div style={{textAlign:"center"}}>
            <Msg name={name} />
            <img style={{width:"200px"}} src={img} alt="" />
            <p>{tel}</p>
        </div>
    )
}
export default Person

