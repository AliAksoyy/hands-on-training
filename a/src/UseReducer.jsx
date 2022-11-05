import { useReducer} from "react";
import { initialState, reduce } from "./reduce";

const UseReducer = () => {
 
    const {state,dispatch} =useReducer(reduce,initialState)

    const {loading,catImage,error} =state

  const getCatImage = async () => {
    const url = "https://api.thecatapi.com/v1/images/search";
    dispatch({type:"start"})
    try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch({type:"success", payload:data[0].url})
    } catch (error) {
      dispatch({type:"fail", payload:"hata"})
      console.log(error);
    } 
  };


  return (
    <div>
      <button
        onClick={getCatImage}
        disabled={loading}
        style={{ display: "block", margin: "1rem" }}
      >
        Get Cat Image
      </button>
      {error && <h2>{error}</h2>}
      {catImage && <img width="50%" src={catImage} alt="img" />}
    </div>
  );
};

export default UseReducer;
