

const Events = () => {

let message= "EVENT BASED PROGRAM"

const handleClick = () => {
    alert("Btn Clicked")
}

const handleClear = function(msg) {
    alert(msg)
}

const handleChange = (e)=> {
    console.log(e.target)
    message= "REACT";

}

return(
    <div className="container text-center mt-4">

            <h1>{message}</h1>
            <button onClick={handleClick} className="btn btn-success">Click</button>
            <button onClick={()=>handleClear("Clear Btn Clicked")} className="btn btn-dark">Clear</button>
            <button onClick={handleChange} className="btn btn-danger">Change</button>
    </div>
)

}

export default Events