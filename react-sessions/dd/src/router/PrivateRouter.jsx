import React from 'react'
import {Outlet, Navigate} from "react-router-dom"
import { useAuthContext } from '../context/ProviderAuth'

const PrivateRouter = () => {
  

const {user}=useAuthContext()
console.log(user)
   return (<div>
         {user ? <Outlet /> : <Navigate to="/login"/>}
   </div>)
  
}

export default PrivateRouter