import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Addtutorials from '../components/Addtutorials'
import Tutorials from '../components/Tutorials'

const Home = () => {

    const [info,setInfo]=useState([])

    useEffect(()=> {
        getData()
    },[])

    const getData = async()=> {
      const res =await fetch("https://randomuser.me/api/")
      const data =await res.json()
      console.log(data)
     
    } 
console.log(info);

  return (
    <div>
        <Addtutorials />
        <Tutorials />
    </div>
  )
}

export default Home