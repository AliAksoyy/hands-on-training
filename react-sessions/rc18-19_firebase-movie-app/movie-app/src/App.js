import React from "react";
import { ToastContainer } from "react-toastify";

import AppRouter from "./router/AppRouter";

const App = () => {





  return (
    <div className="bg-grey-100 dark:bg-[#23242a]">
     <AppRouter />
     <ToastContainer />
    </div>
  );
};

export default App;
