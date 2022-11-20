import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login"
import Main from "../pages/Main"
import MovieDetail from "../pages/MovieDetail"
import Navbar from "../components/Navbar";
// import LoginProvider from "../context/LoginProvider";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/moviedetail" element={<PrivateRouter />}>
          <Route path=":id" element={<MovieDetail />} />
        </Route>
        <Route path="*" element ={<Main />}/>
      </Routes>
    </>
};

export default AppRouter;
