
import AppRouter from "./router/AppRouter"
import {BrowserRouter} from "react-router-dom"
import {AuthProvider} from "./context/AuthProvider";


function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
           <AppRouter />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
