import React from "react";

import Person from "./Component/Person";


import data from "./data";
console.log(data)
function App() {

 
  return (
    
    <>
    <Person 
    name={data[0].name} 
    img={data[0].img}
    tel = {data[0].tel} />
    <Person 
    name={data[1].name} 
    img={data[1].img}
    tel = {data[1].tel} />
    <Person 
    name={data[2].name} 
    img={data[2].img}
    tel = {data[2].tel} />
     
    </>
    )
}

export default App;
