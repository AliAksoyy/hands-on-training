import React, { useEffect, useState } from 'react'
import {useParams, useLocation,  useNavigate} from "react-router-dom"

const PersonDetail = () => {
    const [person, setPeople] = useState("")
    const navigate = useNavigate()
    const {id} = useParams()
    console.log(id);

    // const {state:person} = useLocation()
    // console.log(person)

  useEffect(()=> {
        fetch(`https://reqres.in/api/users/${id}`)
        .then((res) => res.json())
        .then((data)=> setPeople(data.data))
        .catch((err)=> console.log(err));
  },[])

  return (
   
       
           
               
            <div className='container text-center' key={id}>
                        <h3>{person.first_name} {person.last_name}</h3>
                        <img className='rounded' src={person.avatar} alt="" />
                        <p>{person.email}</p>
                        <div>
                            <button className='btn btn-success' onClick={()=> navigate("/")} >Home</button>
                            <button className='btn btn-warning ms-2' onClick={()=> navigate(-1)}>Go Back</button>
                        </div>
            </div>
                
       
    
    
  )
}

export default PersonDetail