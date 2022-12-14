import React,{useContext, createContext, useState, useEffect} from "react"
import {auth, googleProvider} from "../utils/firebase"



const AuthContext=createContext()

export function useAuth(){
    return useContext(AuthContext)
}



export const AuthcontextProvider = ({children})=> {

    const [currentUser,setCurrentUser] = useState()
    const [loading,setLoading]=useState(true)

    useEffect(()=>{
        const unsubscribe=auth.onAuthStateChanged((user)=> {
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe
    },[])


    function signup(email,password){
        return auth.createUserWithEmailAndPassword(email, password)
    }

    function login(email,password){
        return auth.signInWithEmailAndPassword(email, password)
    }
    function logout(){
        auth.signOut()
    }
    function loginWithGoogle(){
        googleProvider.setCustomParameters({prompt:"select_account"});
        auth.signInwithPopup(googleProvider)
    }

    
    function updateEmail(email){
        return currentUser.updateEmail(email)
    }
    function updatePassword(password){
        return currentUser.updatepassword(password)
    }
    const values={signup,login,logout,loginWithGoogle,updateEmail,updatePassword}
    return(
        <AuthContext.Provider value={values}>
            { !loading && children}
        </AuthContext.Provider>
    )
}
