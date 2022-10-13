

const Event =()=> {

    const handleClick = () => {
        alert("Btn Clicked")
    }
    function handleClear(msg) {
        alert(msg)
    }
    const handleChange = function() {
        
    }



    return(

        <div className="container mt-4 text-center">
            <button onClick={handleClick} className="btn btn-success">Click</button>
            <button onClick={()=>handleClear("Clear Btn Clicked")} className="btn btn-dark" >Clear</button>
            <button onClick={handleChange} className="btn btn-danger">Change</button>
        </div>
    )

}

export default Event