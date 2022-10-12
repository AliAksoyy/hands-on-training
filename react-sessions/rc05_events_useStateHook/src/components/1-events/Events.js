

const Events = () => {

const handleClick = () => {
    alert("Btn Clicked")
}

const handleClear = function(msg) {
    alert(msg)
}

return(
    <div className="container text-center mt-4">
            <button onClick={handleClick} className="btn btn-success">Click</button>
            <button onClick={()=>handleClear("Clear Btn Clicked")} className="btn btn-dark">Clear</button>
    </div>
)

}

export default Events