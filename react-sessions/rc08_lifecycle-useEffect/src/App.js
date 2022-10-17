// import { useState } from "react";
// import LifeCycleMethods from "./components/LifeCycleMethods";
// import UseEffectHook from "./components/UseEffectHook";
import User from "./components/User";

function App() {
  // const [show, setShow] = useState(false)

  return (
    <div className="container text-center mt-4">
      {/* <button onClick={()=>setShow(!show)} className="btn btn-dark">{!show ? "Hide" : "Show"}</button>
      {!show &&  <UseEffectHook />} */}
      {/* {!show &&  <LifeCycleMethods />} */}
      <User />
     
    </div>
  );
}

export default App;
