import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {

    newList:[],
    loading:false,
    error:false
};

export const getNews= createAsyncThunk("getNews",
async()=> {
  const API_KEY="91bebcb7e4a2421089c507605565fcf0"
  const url = `https://newsapi.org/v2/top-headlines?country=tr&apiKey=${API_KEY}`;
  try{
    const {data} = await axios(url)
    return data.articles
  } catch (error) {
    console.log(error)
  }
})



const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    clearNewsList:(state)=> {
        state.newList=[]
    }
  },
  extraReducers:(builder)=> {
    builder
    .addCase(getNews.pending, (state)=> {
      state.loading=true
    })
    .addCase(getNews.fulfilled, (state,{payload})=> {
      state.newList=payload;
      state.loading=false;
    })
    .addCase(getNews.rejected, (state)=> {
      state.error=true;
      state.loading=false
    })
  }
});

export const {clearNewsList} = newsSlice.actions

export default newsSlice.reducers