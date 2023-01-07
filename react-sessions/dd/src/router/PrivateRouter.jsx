import React from 'react'
import {Outlet, Navigate} from "react-router-dom"

const PrivateRouter = () => {
  
const users=true

   return (<>
   {users ? <Outlet /> : <Navigate to="/login" />}
   </>)
  
}

export default PrivateRouter