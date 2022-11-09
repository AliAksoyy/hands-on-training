import { createContext, useContext, useEffect, useState } from "react"
import { userObserver } from "../auth/firebase"

export const LoginContext =createContext()


 const LoginProvider = ({children}) => {

    const [currentUser,setCurrentUser]=useState(false)
    console.log(currentUser);



    useEffect(()=> {
        userObserver(setCurrentUser)
      },[])



    return(
        <LoginContext.Provider value={{currentUser}}>
            {children}
        </LoginContext.Provider>
    )
}

export default LoginProvider

export const useLoginContext = () => {
    return useContext(LoginContext)
}