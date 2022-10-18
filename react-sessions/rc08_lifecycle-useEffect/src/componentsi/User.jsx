import React, { useEffect, useState } from 'react'

const User  = () => {
    const [user, setData] = useState("")

      
        
        const getUser = () => {
            fetch('https://randomuser.me/api/')
            .then((res)=> {
                if(!res.ok) {
                    throw new Error("hata")
                }
                return res.json()
            }).then((data)=> {
                // console.log(data)
                setData(data.results[0])
            console.log(user);
            }).catch((err)=> console.log(err))
        }
        useEffect(()=> {
            getUser()
        },[])
        console.log(user)
        const {name,dob,email,picture} =user

  return (
    <div>

        <h1>{name?.first}</h1>
        <img className='rounded-circle' src={picture?.large} alt="" />
        <p>{email}</p>
        <h5>{new Date(dob?.date).toLocaleDateString()} {dob?.age}</h5>
        <button onClick={getUser}  className='btn btn-danger'>Get User</button>
    </div>
  )
}

export default User