// import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useLoginContext } from "../context/LoginProvider";
// import { LoginProvider } from "../context/LoginProvider";



const PrivateRouter = () => {
  // const {user}=useContext(LoginProvider)
  const {user}=useLoginContext()
 console.log(user)
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
