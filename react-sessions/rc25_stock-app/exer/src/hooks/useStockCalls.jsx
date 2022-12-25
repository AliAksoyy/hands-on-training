import {useDispatch } from 'react-redux';
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { fetchFail, fetchStart, getProCatBrandsSuccess, getSuccess } from '../features/stockSlice';
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

    const getProCatBrands = async()=> {
      dispatch(fetchStart())
      try{
       const[products, categories, brands] =await Promise.all(
            [axiosWithToken.get("stock/products/"),
            axiosWithToken.get("stock/categories/"),
            axiosWithToken.get("stock/brands/")]
            )
            dispatch(getProCatBrandsSuccess([products?.data, categories?.data, brands?.data]))
            toastSuccessNotify("basarili")
      } catch(err){
          console.log(err)
          dispatch(fetchFail())
          toastErrorNotify("basarisiz")
      }
    }

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
        const deleteBrand =(id)=> deleteStockData(id, "brands")
        const deleteProduct =(id)=> deleteStockData(id, "products")
        const deleteSales =(id)=> deleteStockData(id, "sales")

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
      const postBrand = (info) =>postStockData(info,"brands")
      const postProduct = (info) =>postStockData(info,"products")
      const postSale = (info) =>postStockData(info,"sales")
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
      const putBrand = (info) => putStockData(info,"brands")


  return {getFirms,deleteFirm,putBrand, postFirm, putFirms,getProducts,getBrands,getCategories,getSales,deleteBrand,postBrand,deleteProduct,getProCatBrands,postProduct,deleteSales,postSale};
};

export default useStockCalls
