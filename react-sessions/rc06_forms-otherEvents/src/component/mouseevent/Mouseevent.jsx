import { useState } from "react"

const Mouseevent =()=> {

    const [showHint, setShowHint] = useState(false)

    const [toggle, setToggle] = useState(false)
    const handleDoubleClick = (e) => {
        setToggle(!toggle)
        toggle ? (e.target.className = "bg-danger text-light w-50 p-4") : (e.target.className = "bg-danger text-light w-50 p-4")
    }

    console.log(toggle)
    return(
        <div className="container text-center d-flex flex-column align-items-center mt-4">
            <h2 className="text-danger">MOUSE EVENT</h2>
            <div 
            onMouseEnter={()=> setShowHint(true)}
             onMouseOut={()=> setShowHint(false)} 
             id="todo-1" 
             className="bg-success text-light w-50 p-4"
             >
             todo item 1 {showHint && <span>sdasdasdasda</span>}
             </div>
            <div 
            id="todo-2" 
            className="bg-success text-light w-50 p-4"
            onDoubleClick={handleDoubleClick}
            >
            todo item 2</div>
            <div id="todo-3" className="bg-success text-light w-50 p-4">todo item 3</div>
            <p>X and Y</p>
            <p className="text-danger fw-bold">coordX - coordY</p>
        </div>
    )
}

export default Mouseevent