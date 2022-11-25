import axios from "axios"
import { useSelector } from 'react-redux';

const useAxiosCalls = () => {
    const {token} = useSelector(state=> state.auth)

    const axiosWithToken = axios.create({

        baseURL :"https://14281.fullstack.clarusway.com",

        headers: {Authorization: `Token ${token}`}

      });
    

  return {axiosWithToken}
    
}

export default useAxiosCalls

