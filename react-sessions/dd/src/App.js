import "./App.css";
import Counter from "./components/counter/Counter";
import Todo from "./components/todo/Todo";

import {reducer} from "./components/redux/reducers/counterReducer"
import { Provider } from "react-redux";
import { store } from "./components/redux";

function App() {

 


  return (
    <div className="app">
    <Provider store={store}>
     <Counter />
    </Provider>
      
      {/* <Todo /> */}
    </div>
  );
}

export default App;
