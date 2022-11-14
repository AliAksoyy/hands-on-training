import { createSlice } from '@reduxjs/toolkit'

const initialState = {

    newList:[],
    loading:false,
    error:false
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    clearNewsList:(state)=> {
        state.newList=[]
    }
  }
});

export const {clearNewsList} = newsSlice.actions

export default newsSlice.reducers