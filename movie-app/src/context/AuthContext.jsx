import { createContext, useContext, useState } from "react"


export const LoginContext =createContext;




export const AuthContext = ({children}) => {

  const [user,setUser]=useState({
    email:"",
    password:""
  })

const value={user,setUser}

  return  <LoginContext.Provider value={value}>
            {children}
          </LoginContext.Provider>
  
}


//custom Hokk

export const useLoginContext = () => {
    return useContext(LoginContext)
}