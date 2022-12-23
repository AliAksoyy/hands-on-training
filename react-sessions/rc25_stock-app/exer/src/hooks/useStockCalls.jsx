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
      dispatch(getSuccess({data,url}))
      toastSuccessNotify("basarili")

    } catch (err) {
      console.log(err)
      dispatch(fetchFail())
      toastErrorNotify("basarisiz")
    }
  }
    const getFirms = ()=> getStockData("firms")
    const getSales = ()=> getStockData("sales")
    const getCategories = ()=> getStockData("categories")
    const getProducts = ()=> getStockData("products")
    const getBrands = ()=> getStockData("brands")

      // !--------------deleteCalls---------------

        const deleteStockData = async(id,url) => {

            try{
                await axiosWithToken.delete(`/stock/${url}/${id}/`)
                toastSuccessNotify(`${url} successfuly deleted`)
                getStockData(url)
                
            }catch(err){
              console.log(err)
              toastErrorNotify(`${url} cannot deleted`)
            }
        }

        const deleteFirm =(id)=> deleteStockData(id, "firms")

      // !--------------postCalls---------------
      

      const postStockData = async(info,url) => {

      try {
        await axiosWithToken.post(`stock/${url}/`, info)
        toastSuccessNotify(`${url} successfuly added`)
        getStockData(url)
      } catch (error) {
        console.log(error)
        toastErrorNotify(`${url} cannot be added`)
      }
      }

      const postFirm = (info) =>postStockData(info,"firms")

      // !--------------putCalls---------------

      const putStockData = async(info,url) => {
     
        try{
        await axiosWithToken.put(`stock/${url}/${info.id}/`, info)
        toastSuccessNotify(`${url} successfulyupdated`)
         getStockData(url)
          
        }catch (err) {
          console.log(err)
        toastErrorNotify(`${url} cannot be updated`)
        }
      }
      const putFirms = (info) => putStockData(info,"firms")


  return {getFirms,deleteFirm, postFirm, putFirms,getProducts,getBrands,getCategories,getSales};
};

export default useStockCalls
