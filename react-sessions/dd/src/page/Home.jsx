import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import AddTask from '../components/AddTask'
import Header from '../components/Header'
import ListTask from '../components/ListTask'

const Home = () => {

  const [show,setShow]=useState(false)
  const [info,setInfo]=useState([])

  useEffect(()=> {
    getData()
  },[])

const getData = async()=> {
  const url = "https://63b118c86a74151a1bcae4be.mockapi.io/api/task"
  const {data} =await axios(url)
  setInfo(data)
}

console.log(info)

  return (
    <div style={{width:"55%", border:"4px solid orange",borderRadius:"15px", padding:"1rem", backgroundColor:"#ef1"}}>
      <Header show={show} setShow={setShow} />
      {show && (
        <>
        <AddTask info ={info} setInfo={setInfo} getData={getData} />
        <ListTask info ={info} setInfo={setInfo} />
        </>
      )}
       
       
      
    
    </div>
  )
}

export default Home