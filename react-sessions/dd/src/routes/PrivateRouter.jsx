import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRouter = () => {

    const user=JSON.parse(localStorage.getItem("user"))
    console.log(user)

  return ( <>
     {user ? <Outlet /> : <Navigate to="/register"/>}
  </>
   
  )
}

export default PrivateRouter