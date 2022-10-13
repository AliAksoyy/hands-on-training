

const Event =()=> {

    let message = "ALİ AKSOY MERHABA"

    const handleClick = () => {
        alert("Btn Clicked")
    }
    function handleClear(msg) {
        alert(msg)
    }
    const handleChange = function(e) {
        console.log(e.target);
        message= "BEYDA AKSOYY"
    }



    return(

        <div className="container mt-4 text-center">
            <h1>{message}</h1>
            <button onClick={handleClick} className="btn btn-success">Click</button>
            <button onClick={()=>handleClear("Clear Btn Clicked")} className="btn btn-dark" >Clear</button>
            <button onClick={(e)=>handleChange(e)} className="btn btn-danger">Change</button>
        </div>
    )

}

export default Event