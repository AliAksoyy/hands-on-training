import React from 'react'
import { useState } from 'react'

const Ali = () => {

 const [person,setPerson]=useState({name:"ali", age:31, surname:"aksoy"})
 
 const inc=()=> {
   setPerson({
        ...person,age:person.age +1
   })
 }
  return (
    <div id="id" className="container text-center mt-4">
       <h2>{person.name} {person["surname"]}</h2>
       <h2>{person.age}</h2>
       <button onClick={()=>inc}>arttir</button>
    </div>
  )
}

export default Ali