import { useState } from "react"

export const UseStateCounter = () => {

    const [person,SetPerson] = useState({
        name:"Ali",
        surname:"Aksoy",
        age:43
    })
    

    const [count, setCount] = useState(0)

    const inc = () => {
        setCount(count +1)
    }

    const dec = () => {
        if(count>0) {
        setCount(count-1)

        }
        
    }
    const incAge = () => {
        SetPerson({...person, age:person.age +1})
    }
    console.log(person)

    return(
        <div className="container text-center mt-4">
        <section>
        <h1>USESTATE HOOK</h1>
        <h2 className="display-4 text-danger">COUNT:{count}</h2>
        <button onClick={inc} className="btn btn-success">INC</button>
        <button onClick={()=>setCount(0)} className="btn btn-dark">Clear</button>
        
        {/* <button onClick={()=>{ count>0 && setCount(count-1)}} className="btn btn-danger">DEC</button> */}
        <button onClick={dec} className="btn btn-danger">DEC</button>
        </section>
        <section>
            <h1>USESTATE OBJECT</h1>
            <h2>{person.name}</h2>
            <h2>{person.surname}</h2>
            <h4>{person.age}</h4>
            <button onClick={incAge} className="btn btn-info">inc age</button>
        </section>
</div>
    )
}