import React from "react";

import Person from "./Component/Person";


import data from "./data";
console.log(data)
function App() {

 
  return (
    
    <>
    {data.map((person)=> <Person
    key= {person.name}
    name={person.name} 
    img = {person.img} 
    tel= {person.tel} />

    )}
    </>
    )
}

export default App;


