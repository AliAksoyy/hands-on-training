import React, { useEffect, useState } from 'react'

const Ali = () => {

    const [kullanici, setKullanici] = useState("");


    useEffect(() => {
        setTimeout(()=>{
            fetch("https://randomuser.me/api/")
            .then((res)=> {
                if(!res.ok){
                    throw new Error("hata")
                }
                return res.json()
            }).then((data) => setKullanici(data.results[0]))
        },2000)
       
        return () => {
            console.log("unmounting");
        }
     
    }, [])
    console.log(kullanici)
    
    const {name, email} = kullanici
  return (
    
        
            <div>
                <h1>Functional Component</h1>
                <p>{name?.first} {name?.last}</p>
                <p>{email}</p>
           </div>

  )
}

export default Ali