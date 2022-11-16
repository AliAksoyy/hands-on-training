import axios from "axios"
import { useDispatch } from "react-redux"
import {fetchStart,loginSuccess,fetchFail,} from "../features/authSlice"


const BASE_URL="https://clarusway.pythonanywhere.com/"


const useAuthCall = () => {
    
  const dispatch=useDispatch()

  const login = (userInfo) => {
    dispatch(fetchStart())
    try {
        const {data}= axios.post(`${BASE_URL}account/auth/login`, userInfo)
        dispatch(loginSuccess(data))
    } catch (error) {
        console.log(error);
        dispatch(fetchFail())
    }
}
    return {login}
}
export default useAuthCall



