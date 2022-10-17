import React, { useEffect, useState } from "react";
import axios from "axios";

const FuncComp = () => {
  const [data, setData] = useState("")

  useEffect(()=> {
    let isApi = true
    if(isApi) {
      setTimeout(()=> {
        axios.get("https://randomuser.me/api/")
        .then((res)=> setData(res.data.results[0]))
        
      },2000)
    }
    return () => {
      isApi = false
      console.log("canceled")
    }
  },[])
return(
  <div>

 
  <h1>Functional Component</h1>
  {data && (
    
      <p>{data.name.first}</p>
    
  )}
  </div>
)
};

export default FuncComp;