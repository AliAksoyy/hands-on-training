

const Events = ()=> {

    const handleClick=(e)=> {
    
    }
    const handleClear=(msg)=> {
        alert(msg)
    }

    return(
        <div id="id" className="container text-center mt-4">
           <button className="btn btn-success" onClick={handleClick} >Click</button> 
           <button onClick={()=>handleClear("clear btn clicked")} className="btn btn-dark">Clear</button>
        </div>
    )
}
export default Events