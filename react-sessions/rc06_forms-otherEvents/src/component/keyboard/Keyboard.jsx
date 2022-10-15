import { useState } from "react"


const Keyboard = () => {
    
    const change = function(e) {
        console.log(e.keyCode);
        if(e.keyCode >=48 && e.keyCode <=57) {
            alert("please not a number")
            e.preventDefault()
        }
    }

    const [inputValue, setInputValue] = useState("")
   
    return(
        <div className="container text-center">
            <h1>Cliipboard</h1>
            <input type="text" 
            className="form-control" 
            onChange={(e)=> {
            e.target.value=e.target.value.toLocaleUpperCase();
            setInputValue(e.target.value)
            }}
            onKeyDown={change}
            />
            <p className="text-start mt-4">{inputValue}</p>
        </div>
    )
}

export default Keyboard