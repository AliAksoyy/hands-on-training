import "./App.css";
import Counter from "./components/counter/Counter";
// import Todo from "./components/todo/Todo";
import { legacy_createStore } from "redux";
import reducer from "./redux";
import { Provider } from "react-redux";

function App() {

const store = legacy_createStore(reducer)



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
