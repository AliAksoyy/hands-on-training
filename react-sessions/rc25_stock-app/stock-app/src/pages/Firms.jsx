import axios from "axios"
import { useSelector, useDispatch } from 'react-redux';
import {getSuccess} from "../features/stockSlice"
import {useEffect} from "react"

const Firms = () => {

  const {token} = useSelector(state => state.auth)
  const dispatch=useDispatch()
 

  const getData = async() => {

  const BASE_URL = "https://14281.fullstack.clarusway.com";
    try {
        const {data} = await axios.get(`${BASE_URL}/stock/firms/`, 
        {headers: {Authorization: `Token ${token}`}} )
        console.log(data)
        dispatch(getSuccess(data, "firm"))
    } catch (error) {
      console.log(error)
    }
  }

useEffect(() => {
 getData()
}, [])




  return <div>
  
  Firms</div>;
};

export default Firms;
