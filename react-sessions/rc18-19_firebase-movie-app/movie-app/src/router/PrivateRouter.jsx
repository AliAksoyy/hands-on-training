import React from 'react'
import { useLoginContext } from '../context/LoginProvider'
import {Navigate, Outlet} from "react-router-dom"

const PrivateRouter = () => {

    const {currentUser}=useLoginContext()

   

    return     (currentUser ? <Outlet /> : <Navigate to="/register" replace/>)

   
  
}

export default PrivateRouter