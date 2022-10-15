import { useState } from "react"


const Keyboard = () => {
    

    const [inputValue, setInputValue] = useState("");

    const change = function(e) {


        console.log(e.keyCode);
        if(e.keyCode >=48 && e.keyCode <=57) {
            alert("please not a number")
            e.preventDefault()
        }
        e.keyCode===13 && setInputValue("")
    }

    function paste(e) {
        
        e.target.value=e.clipboardData.getData("text").toLocaleUpperCase;
        e.preventDefault()

    }
    const copy = (e) => {
        alert("df")
    }

   
    return(
        <div className="container text-center">
            <h1>Cliipboard</h1>
            <input type="text" 
            className="form-control" 
            value={inputValue}
            onChange={(e)=> {
            e.target.value=e.target.value.toLocaleUpperCase();
            setInputValue(e.target.value)
            }}
            onKeyDown={change}
            />
            <p onCopy={copy} className="text-start mt-4">{inputValue}</p>

            <textarea 
            className="form-control" 
            name="" id="" cols="30" 
            rows="10"
            onPaste={paste}
            >
               
            </textarea>
        </div>
    )
}

export default Keyboard