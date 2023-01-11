import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/authSlice";
import newsSlice from "../features/newsSlice";

export const store=configureStore({
    reducer:{
        auth: authSlice,
        news: newsSlice
    }
})