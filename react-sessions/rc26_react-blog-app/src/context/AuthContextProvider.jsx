import React,{useContext, createContext} from "react"

const AuthContext=createContext()

export function useAuth(){
    return useContext(AuthContext)
}






const AuthcontextProvider = ()=> {
    return(
        <div>

        </div>
    )
}

export default AuthcontextProvider