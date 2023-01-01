import React, { useState } from 'react'
import AddTask from '../components/AddTask'
import Header from '../components/Header'
import ListTask from '../components/ListTask'

const Home = () => {

  const [show,setShow]=useState(false)
  return (
    <div style={{width:"55%", border:"4px solid orange",borderRadius:"15px", padding:"1rem", backgroundColor:"#ef1"}}>
      <Header show={show} setShow={setShow} />
      {show && (
        <>
        <AddTask />
        <ListTask />
        </>
      )}
       
       
      
    
    </div>
  )
}

export default Home