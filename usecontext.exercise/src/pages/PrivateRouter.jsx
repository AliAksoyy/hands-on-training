import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";



const PrivateRouter = () => {
  const {user}=useContext(LoginContext)
 console.log(user)
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
