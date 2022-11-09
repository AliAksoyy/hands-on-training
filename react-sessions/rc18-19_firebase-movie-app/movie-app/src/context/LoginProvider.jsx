import { createContext, useContext, useState } from "react"

export const LoginContext =createContext()


 const LoginProvider = ({children}) => {
    const [user,setUser]=useState({email:"aa",password:"aa"})

    return(
        <LoginContext.Provider value={user}>
            {children}
        </LoginContext.Provider>
    )
}

export default LoginProvider

export const useLoginContext = () => {
    return useContext(LoginContext)
}