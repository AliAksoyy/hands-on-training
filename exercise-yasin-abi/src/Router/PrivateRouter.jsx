import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'


const PrivateRouter = () => {
const userAuthentic = true;
  return (
    <>
   {userAuthentic ? <Outlet />  : <Navigate to="/register" /> }
   </>
  )
}

export default PrivateRouter