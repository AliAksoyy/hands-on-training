import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login"
import Main from "../pages/Main"
import MovieDetail from "../pages/MovieDetail"
import Navbar from "../components/Navbar";
import LoginProvider from "../context/LoginProvider";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <>
      <LoginProvider>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/details/:id" element={<PrivateRouter />} >
            <Route path="" element={<MovieDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </LoginProvider>
    </>
  )
};

export default AppRouter;
