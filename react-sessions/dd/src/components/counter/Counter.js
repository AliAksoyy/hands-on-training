import { useDispatch, useSelector } from "react-redux";
import "./Counter.css";



const Counter = () => {
  const dispatch=useDispatch()
  const counter=useSelector(state=>state.counter)
  const inc=()=> {
    
          dispatch({type:"ARTTIR"})
  }
  const reset=()=> {

  }
  const dec=()=> {

  }



  return (
    <div className="app">
      <h2 className="counter-header">Counter With Redux</h2>
      <h1>counter:{counter}</h1>
      <div>
        <button className="counter-button positive" onClick={inc}>increase</button>
        <button className="counter-button zero" onClick={reset}>reset</button>
        <button className="counter-button negative" onClick={dec}>decrease</button>
      </div>
    </div>
  );
};

export default Counter;
