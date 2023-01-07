import React, { useContext, useEffect, useState } from 'react'
import { createContext } from 'react'
import {onAuthStateChanged } from "firebase/auth";
import {auth} from "../firebase/auth"

export const AuthContext=createContext()


const ProviderAuth = (props) => {

    const [authUser,setAuthUser]=useState({email:"",password:"",displayName:"", photoURL:"" })
  

    useEffect(()=> {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const {email,photoUrl,displayName}=user
         
          setAuthUser({...authUser, email:email,displayName:displayName,photoURL:photoUrl})
        } else {
          setAuthUser({...authUser, email:"",password:"",displayName:"", photoURL:"" })
        }
      });
    },[])
   

    const values={authUser,setAuthUser}
  return (
    <AuthContext.Provider value={values}>{props.children}</AuthContext.Provider>
  )
}

export const useAuthContext=()=> {
    return useContext(AuthContext)
}

export default ProviderAuth