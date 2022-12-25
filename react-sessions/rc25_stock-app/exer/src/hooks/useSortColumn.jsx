import { useEffect, useState } from 'react'

const useSortColumn = (data,columObj) => {

  const [sortedData,setSortedData]=useState(data)

  const [toggle,setToggle]=useState(columObj)
console.log(toggle)
  useEffect(()=> {
    setSortedData(data)
  },[data])

  const handleSort=(arg,type)=> {
    setToggle({...toggle, [arg]: toggle[arg] * -1 })
    setSortedData(
     [...sortedData].sort((a,b) => {
      if(type==="number"){
        return toggle[arg] * (a[arg] - b[arg])
      }else{
        if(toggle[arg] === 1){
         return b[arg]> a[arg]? 1 : b[arg]< a[arg]? -1 : 0
        }else {
          console.log("beyda")
          return a[arg] > b[arg] ? 1 : a[arg] < b[arg] ? -1 : 0
        }
      }
     })
    )
  }


  return {handleSort,sortedData,toggle}
}

export default useSortColumn