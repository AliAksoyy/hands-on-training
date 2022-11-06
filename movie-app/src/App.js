
import AppRouter from "./router/AppRouter"
import {BrowserRouter} from "react-router-dom"
import AuthContext from "./context/AuthContext";

function App() {
  return (
    <div>
      <AuthContext>
        <BrowserRouter>
           <AppRouter />
        </BrowserRouter>
      </AuthContext>
    </div>
  );
}

export default App;
