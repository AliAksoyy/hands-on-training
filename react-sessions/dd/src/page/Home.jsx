import React from 'react'
import AddTask from '../components/AddTask'
import Header from '../components/Header'
import ListTask from '../components/ListTask'

const Home = () => {
  return (
    <div style={{width:"55%", border:"4px solid orange",borderRadius:"15px", padding:"1rem", backgroundColor:"#ef1"}}>
      <Header />
      <AddTask />
      <ListTask />
    </div>
  )
}

export default Home