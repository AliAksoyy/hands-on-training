import React, { useContext, useState } from 'react'
import { createContext } from 'react'

export const AuthContext=createContext()


const ProviderAuth = (props) => {

    const [user,setUser]=useState({email:""})
    const values={user,setUser}
  return (
    <AuthContext.Provider value={values}>{props.children}</AuthContext.Provider>
  )
}

export const useAuthContext=()=> {
    return useContext(AuthContext)
}

export default ProviderAuth