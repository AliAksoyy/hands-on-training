import {useDispatch } from 'react-redux';
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { fetchFail, fetchStart, getSuccess } from '../features/stockSlice';
import useAxiosCalls from './useAxiosCalls';

const useStockCalls = () => {
  const dispatch = useDispatch();
  const {axiosWithToken} = useAxiosCalls()


      // !--------------getCalls---------------

  const getStockData = async(url) => {

      dispatch(fetchStart())
    try {
      const {data} = await axiosWithToken.get(`/stock/${url}/`)
      console.log(data)
      dispatch(getSuccess({data,url}))
      toastSuccessNotify("başarılı")

    } catch (err) {
      console.log(err)
      dispatch(fetchFail())
      toastErrorNotify("başarısız")
    }
  }
    const getFirms = ()=> getStockData("firms")

      // !--------------deleteCalls---------------

        const deleteStockData = async(id,url) => {

            dispatch(fetchStart())

            try{
                await axiosWithToken.delete(`/stock/${url}/${id}/`)
                getStockData(url)
                
            }catch(err){
              console.log(err)
              dispatch(fetchFail())
            }
        }

        const deleteFirm =(id)=> deleteStockData(id, "firms")
 


    


  return {getFirms,deleteFirm};
};

export default useStockCalls
