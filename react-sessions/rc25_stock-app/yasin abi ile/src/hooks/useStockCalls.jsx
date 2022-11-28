// import { axiosWithToken } from "../service/axiosInstance";
import { useDispatch } from "react-redux";
import {
  fetchFail,
  fetchStart,
  getSuccess,
  getProCatBrandsSuccess,
  getProPurBraFirmsSuccess,
} from "../features/stockSlice";
import useAxios from "./useAxios";
import { toastSuccessNotify, toastErrorNotify } from "../helper/ToastNotify";

const useStockCalls = () => {
  const dispatch = useDispatch();
  const { axiosWithToken } = useAxios();

  //!------------- GET CALLS ----------------
  const getStockData = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.get(`stock/${url}/`);
      dispatch(getSuccess({ data, url }));
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  const getFirms = () => getStockData("firms");
  const getSales = () => getStockData("sales");
  const getCategories = () => getStockData("categories");
  const getBrands = () => getStockData("brands");
  const getProducts = () => getStockData("products");
  const getPurchases = () => getStockData("purchases");

  const getProCatBrands = async () => {
    dispatch(fetchStart());
    try {
      const [products, categories, brands] = await Promise.all([
        axiosWithToken.get("stock/products/"),
        axiosWithToken.get("stock/categories/"),
        axiosWithToken.get("stock/brands/"),
      ]);

      dispatch(
        getProCatBrandsSuccess([products?.data, categories?.data, brands?.data])
      );
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };


  const getProPurBraFirms = async () =>{
    dispatch(fetchStart());
    try {
      const [products, purchases, brands, firms] = await Promise.all([
        axiosWithToken.get("stock/products/"), axiosWithToken.get("stock/purchases/"), axiosWithToken.get("stock/brands/"), axiosWithToken.get("stock/firms/")
      ])
      dispatch(getProPurBraFirmsSuccess([products?.data, purchases?.data, brands?.data, firms?.data]));
    } catch (error) {
        dispatch(fetchFail())
    }

  }

  //!------------- DELETE CALLS ----------------
  const deleteStockData = async (url, id) => {
    try {
      await axiosWithToken.delete(`stock/${url}/${id}/`);
      toastSuccessNotify(`${url} successfuly deleted`);
      getStockData(url);
    } catch (error) {
      console.log(error);
      toastErrorNotify(`${url} can not be deleted`);
    }
  };

  const deleteFirm = (id) => deleteStockData("firms", id);
  const deleteBrand = (id) => deleteStockData("brands", id);
  const deleteProduct = (id) => deleteStockData("products", id);
  const deletePurchase = (id) => deleteStockData("purchases", id);
  const deleteSale = (id) => deleteStockData("sales", id);
  //!------------- POST CALLS ----------------
  const postStockData = async (info, url) => {
    try {
      await axiosWithToken.post(`stock/${url}/`, info);
      toastSuccessNotify(`${url} successfuly added`);
      getStockData(url);
    } catch (error) {
      console.log(error);
      toastErrorNotify(`${url} can not be added`);
    }
  };

  const postFirm = (info) => postStockData(info, "firms");
  const postBrand = (info) => postStockData(info, "brands");
  const postProduct = (info) => postStockData(info, "products");
  const postPurchase= (info) => postStockData(info,"purchases");
  const postSale = (info) => postStockData(info, "sales");

  //!------------- PUT CALLS ----------------
  const putStockData = async (info, url) => {
    try {
      await axiosWithToken.put(`stock/${url}/${info.id}/`, info);
      toastSuccessNotify(`${url} successfuly updated`);
      getStockData(url);
    } catch (error) {
      console.log(error);
      toastErrorNotify(`${url} can not be updated`);
    }
  };

  const putFirm = (info) => putStockData(info, "firms");
  const putBrand = (info) => putStockData(info, "brands");
  const putPurchase = (info) => putStockData(info, "purchases");
  const putSale = (info) => putStockData(info, "sales");

  return {
    getStockData,
    getFirms,
    getSales,
    getCategories,
    getProducts,
    getProCatBrands,
    getProPurBraFirms,
    getBrands,
    getPurchases,
    deleteFirm,
    deleteBrand,
    deleteProduct,
    deletePurchase,
    deleteSale,
    postFirm,
    postStockData,
    postBrand,
    postProduct,
    postPurchase,
    postSale,
    putFirm,
    putStockData,
    putBrand,
    putPurchase,
    putSale,
  };
};

export default useStockCalls;
