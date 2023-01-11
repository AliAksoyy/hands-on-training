import { createSlice } from "@reduxjs/toolkit";

const initialState={
    newsList:[],
    loading:false,
    error:false,
}

const newsSlice=createSlice({
    name:"news",
    initialState,
    reducers:{
        clearNewsList:(state)=> {
            state.news=[]
        }
    }
})
export const {clearNewsList}=newsSlice.actions
export default newsSlice.reducer