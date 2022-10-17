import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {
  const [first, setFirst] = useState("")
  
  useEffect(()=> {
    axios("https://randomuser.me/api/?results=10")
    .then((res )=> {
      return (
        console.log( res.data.results)
        res.data.results.map((item)=> ({
          name: `${item.name.first}`,
          image: `${item.picture.thumbnail}`
          
        }))
      )
    })
      
    
        
  
    })
  },[])
 
  return (
    <div>App</div>
  )
}

export default App