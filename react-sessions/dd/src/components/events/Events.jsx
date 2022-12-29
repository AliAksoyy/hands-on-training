

const Events = ()=> {
    let msg="ali aksoy"

    const handleClick=(e)=> {
    
    }
    const handleClear=(msg)=> {
        alert(msg)
    }
    const handleChange=(e)=> {
        e.target.parentElement.firstElementChild.innerText="beyda aksoy"
    }

    return(
        <div id="id" className="container text-center mt-4">
            <h1>{msg}</h1>
           <button className="btn btn-success" onClick={handleClick} >Click</button> 
           <button onClick={()=>handleClear("clear btn clicked")} className="btn btn-dark">Clear</button>
           <button onClick={handleChange} className="btn btn-danger">Change</button>
        </div>
    )
}
export default Events