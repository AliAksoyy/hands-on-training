import axios from "axios"
import { useDispatch } from "react-redux"
import {fetchStart,loginSuccess,fetchFail,logoutSuccess} from "../features/authSlice"


const BASE_URL="https://clarusway.pythonanywhere.com/"


const useAuthCall = () => {

  const dispatch=useDispatch()

  const login = async(userInfo)=> {

    dispatch(fetchStart())
    try{
        const {data} = await axios.post(`${BASE_URL}account/auth/login/`, userInfo)
        dispatch(loginSuccess(data))
        
       
    } catch (error) {
        console.log(error);
        dispatch(fetchFail())
    }
}



  const logout = async()=> {

    dispatch(fetchStart())
    try{
        await axios.post(`${BASE_URL}account/auth/logout/`)
        dispatch(logoutSuccess())
        
       
    } catch (error) {
        console.log(error);
        dispatch(fetchFail())
    }
}
    return {login, logout}
}
export default useAuthCall



