import React, { useEffect, useState } from "react";
import axios from "axios";

const FuncComp = () => {
  const [data,setData] = useState("")

  useEffect(()=> {
    let isApi =true;
    setTimeout(()=> {
      if(isApi) {
        axios.get("https://randomuser.me/api/")
        .then(function(res) { setData(res.data.results[0])})
      }
    },1000)
    return () => {
      isApi =false
    }
  },[])

return(
  <div>
    <h1>Functional</h1>
    {data && (
      <p>{data.email}</p>
    )}
  </div>
)
};

export default FuncComp;