

const Mouseevent =()=> {

    return(
        <div className="container text-center d-flex flex-column align-items-center m-4">
            <h2 className="text-danger">MOUSE EVENT</h2>
            <div id="todo-1" className="bg-success text-light w-50 p-4">todo item 1</div>
            <div id="todo-2" className="bg-success text-light w-50 p-4">todo item 2</div>
            <div id="todo-3" className="bg-success text-light w-50 p-4">todo item 3</div>
            <p>X and Y</p>
            <p className="text-danger fw-bold">coordX - coordY</p>
        </div>
    )
}

export default Mouseevent