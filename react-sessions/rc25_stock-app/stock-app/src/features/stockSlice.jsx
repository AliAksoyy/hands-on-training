import { createSlice } from "@reduxjs/toolkit";

const stockSlice = createSlice({
  name: "stock",

  initialState: {
    firms:null,
    brands:null,
    products:null,
    purchases:null,
    sales:null,
    loading:false,
    error:false,
    categories:null
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },

    getSuccess:(state, {payload:{data,url}})=> {
      state.loading=false;
      state[url]= data
    },
   
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchStart,
  getSuccess,
  fetchFail,
} = stockSlice.actions;
export default stockSlice.reducer;
