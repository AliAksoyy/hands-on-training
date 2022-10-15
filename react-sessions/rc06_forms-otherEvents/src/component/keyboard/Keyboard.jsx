import { useState } from "react"


const Keyboard = () => {
    

    const [inputValue, setInputValue] = useState("")
    return(
        <div className="container text-center">
            <h1>Cliipboard</h1>
            <input type="text" 
            className="form-control" 
            onChange={(e)=> setInputValue(e.target.value)}

            />
            <p className="text-start mt-4">{inputValue}</p>
        </div>
    )
}

export default Keyboard