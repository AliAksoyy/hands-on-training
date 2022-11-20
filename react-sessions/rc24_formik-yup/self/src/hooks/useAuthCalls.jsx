import axios from "axios"
import { useDispatch } from "react-redux";
import {fetchStart,loginSuccess, fetchFail,logoutSuccess } from "../features/authSlice"

export const useAuthCall = () => {

const BASE_URL="https://clarusway.pythonanywhere.com"

 const  dispatch = useDispatch();

    const login = async(values)=> {

    dispatch(fetchStart())

    try {
        const {data} = await axios.post(`${BASE_URL}/account/auth/login`, {email:values.email, password:values.password})
        dispatch(loginSuccess(data))
    } catch (error) {
        console.log(error)
        dispatch(fetchFail())
    }

}
    const logout = async()=> {

    dispatch(fetchStart())

    try {
     await axios.post(`${BASE_URL}/account/auth/logout`)
        dispatch(logoutSuccess())
    } catch (error) {
        console.log(error)
        dispatch(fetchFail())
    }

}
    return {login, logout}
}