import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { LoginProvider } from "../context/LoginProvider";



const PrivateRouter = () => {
  const {user}=useContext(LoginProvider)
 console.log(user)
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
