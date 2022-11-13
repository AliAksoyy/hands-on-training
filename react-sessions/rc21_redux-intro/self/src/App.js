import "./App.css";
import Counter from "./components/counter/Counter";
import { Provider } from "react-redux";
import { store } from "./redux";

function App() {






  return (
    <div className="app">
    <Provider store={store}>
      <Counter />
      {/* <Todo /> */}
      </Provider>
    </div>
  );
}

export default App;
