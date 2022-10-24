import { useEffect, useState } from "react"
import {useParams,  useNavigate,useLocation} from "react-router-dom"

export function PersonDetail() {
    const [person, setPerson] = useState("")
    const navigate = useNavigate()
    const {id} = useParams()
    console.log(id)
    // const  {state:person} =useLocation()
    // console.log(person);

    const getData= () => {
          fetch(`https://reqres.in/api/users/${id}`)
        .then((res) =>  {
            if(!res.ok) {
                throw new Error("hata")
            }
            return res.json()})
            .then((data)=> setPerson(data.data))
            .catch((err)=> (navigate("*")))
    }
    useEffect(()=> {
getData()
    },[])
    
      console.log(person)
       
    
    return(
        <div className="container text-center">
            <h3>{person.first_name} {person.last_name}</h3>
            <img className="rounded" src={person.avatar} alt="" />
            <p>{person.email}</p>
            <div>
                <button className="btn btn-success me-2" onClick={()=> navigate("/")}>Home</button>
                <button className="btn btn-warning" onClick={()=> navigate(-1)}>Go Back</button>
            </div>
            
        </div>
    )
}