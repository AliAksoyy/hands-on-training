
const Person = ({name,img,tel}) => {
    // console.log(props);
    return(
        <div>
            <p>Merhaba {name} </p>
            <img src={img} alt="" />
            <p>{tel}</p>
        </div>
    )
}
export default Person

