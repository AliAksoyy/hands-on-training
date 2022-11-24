
import {useEffect} from "react"
import useStockCalls from "../hooks/useStockCalls";

const Firms = () => {

  const {getFirms}= useStockCalls()

useEffect(() => {
 getFirms("firms")
}, [])




  return <div>
  
  Firms</div>;
};

export default Firms;
