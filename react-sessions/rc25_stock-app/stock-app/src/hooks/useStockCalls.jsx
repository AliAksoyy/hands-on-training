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
    const getBrands = ()=> getStockData("brands")
    const getProducts = ()=> getStockData("products")
    const getCategories = ()=> getStockData("categories")

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
        const deleteBrands = (id) => deleteStockData(id, "brands")

      // !--------------postCalls---------------
      

      const postStockData = async(info,url) => {

        dispatch(fetchStart())
      try {
        await axiosWithToken.post(`stock/${url}/`, info)
        getStockData(url)
      } catch (error) {
        console.log(error)
      }

      }

      const postFirm = (info) =>postStockData(info,"firms")
      const postBrands = (info) => postStockData(info, "brands")

      // !--------------putCalls---------------

      const putStockData = async(info,url) => {
        dispatch(fetchStart())
        try{
        await axiosWithToken.put(`stock/${url}/${info.id}/`, info)
         getStockData(url)
          
        }catch (err) {
          console.log(err)
          dispatch(fetchFail())
        }
      }
      const putFirms = (info) => putStockData(info,"firms")
      const putBrands = (info) =>putStockData(info, "brands")
 


    


  return {getFirms,deleteFirm, postFirm, putFirms, getBrands, postBrands, putBrands, deleteBrands,getProducts, getCategories};
};

export default useStockCalls
