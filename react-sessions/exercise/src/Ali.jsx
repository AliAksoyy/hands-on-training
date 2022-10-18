import React, { useEffect, useState } from 'react'

const Ali = () => {
    const [users, setUsers] = useState("")

  

    useEffect(()=> {

        let isApi=true;
        if(isApi) {
            setTimeout(()=> {
                    fetch("https://randomuser.me/api/")
                    .then((res)=> {
                     if(!res.ok) {
                    throw new Error("hata")
                    }
                     return res.json()
                     }).then((data)=> setUsers(data.results[0]))
            },3000)
        }
        return()=> {
            isApi= false
            console.log("canceled")
        }
    })
    
    console.log(users)
    const {name,email} = users
    
  return (
    <div>
        <h1>
            functional component
        </h1>
        <p>{name?.first}</p>
        <p>{email}</p>
      

    </div>
  )
}

export default Ali