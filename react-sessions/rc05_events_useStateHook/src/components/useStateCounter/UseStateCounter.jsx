import { useState } from "react"

export const UseStateCounter = () => {
    const [count, setCount] = useState(0)

    const [person,setPerson] = useState({
        name:"Ali",
        surname:"Akosy",
        age: 32
    })
    console.log(person);
    const {name,surname,age} = person
   function inc(){
        setCount(count +1)
    }
    const incage = ()=> {
        setPerson({...person, age:age + 1})
    }


    return(
        <div className="container mt-4 text-center">
        <section>
            <h1>UseState Component</h1>
            <h2 className="display-4 text-danger">Count:{count}</h2>
            <button onClick={inc} className="btn btn-success">INC</button>
            <button onClick={()=>setCount(0) } className="btn btn-success">CLR</button>
        
            <button onClick={()=> count>0 && setCount(count-1)} className="btn btn-danger">DEC</button>
        </section>
        <section>
            <h2>USESTATE OBJECT</h2>
            <h2>{name}</h2>
            <h2>{surname}</h2>
            <h3>{age}</h3>
            <button onClick={incage} className="btn btn-danger">inc age</button>

        </section>
        
    </div>
    )
}

