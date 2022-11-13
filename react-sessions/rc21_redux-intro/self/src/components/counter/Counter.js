import { useDispatch, useSelector } from "react-redux";
import "./Counter.css";

const Counter = () => {
  const dispatch=useDispatch()
  const {counter} =useSelector((state)=> state)

  return (
    <div className="app">
      <h2 className="counter-header">Counter With Redux</h2>
      <h1>counter:{counter}</h1>
      <div>
        <button onClick={()=> dispatch({type: "INCREMENT"})} className="counter-button positive">increase</button>
        <button className="counter-button zero">reset</button>
        <button className="counter-button negative">decrease</button>
      </div>
    </div>
  );
};

export default Counter;
