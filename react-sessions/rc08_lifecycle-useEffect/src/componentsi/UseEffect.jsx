import { useEffect, useState } from "react"


const UseEffect = function() {
    const [count, setCount] = useState(0)

    // useEffect(()=> {
    //     //mointig + updare
    //     console.log("mounting")
    //     setTimeout(()=> {
    //         alert("data")
    //     },1000)
    // },[])

    // useEffect(()=> {
    //     console.log("mpunting + update");
    //     setTimeout(() => {
    //         alert("ali")
    //     }, 2000);
    // },[count])

        const fetchData = () => {
            console.log("ali")
        }

    useEffect (()=> {
        const timerId = setInterval(fetchData,1000)
        return() => {
                clearInterval(timerId)
                console.log("unmouintg")
        }
    },[])

    console.log("rendering")
    return(
    <div className="container text-center" >
        <h1>LifeCycle Methods</h1>
        <h2>count = {count}</h2>
        <button onClick={() => setCount(count + 1)} className="btn btn-info">Inc</button>
    </div>

    )
}

export default UseEffect