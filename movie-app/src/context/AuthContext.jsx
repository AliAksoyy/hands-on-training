import { createContext, useContext, useState } from "react"


export const LoginContext =createContext;




const AuthContext = () => {

  const [user,setUser]=useState("")

const value={user,setUser}

  return  <LoginContext.Provider value={value}>

          </LoginContext.Provider>
  
}
export default AuthContext;

//custom Hokk

export const useLoginContext = () => {
    return useContext(LoginContext)
}