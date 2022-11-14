import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const user = true; //TODO use selector

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
