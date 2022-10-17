import { useState, useEffect } from "react"


const UseEffectHook =() => {
    const [count, setCount] = useState(0)

    const fetchData =() => {
        console.log("data fetched");
    }

   useEffect(()=> {
    const timerId = setInterval(fetchData,1000)
    console.log("öounting")

    return() => {
        clearInterval(timerId)
        console.log("unmounting");
    }
   }, [])

    console.log("rendered")

    return(
        <div className="container text-center">
        <h1 className="text-danger">use effect</h1>
        <h3>COUNT={count}</h3>
        <button className="btn btn-info" onClick={()=> setCount(count + 1)}>
          INC
        </button>
      </div>
    )
}
export default UseEffectHook