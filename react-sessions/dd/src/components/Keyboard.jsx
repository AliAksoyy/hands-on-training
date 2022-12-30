import { useState } from "react"




const Keyboard = () => {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
   
    const ali=(e)=> {
     setX(e.pageX)
     setY(e.pageY)
    }
   
   
   
 
  return (
   <div className="container  mt-4">
        <h1>Mouse evebts</h1>
     
        <div onMouseMove={ali} className="w-25 p-4 bg-success mx-auto  mb-1" >todo item3</div>
        <p>X and Y</p>
        <p className="text-danger">{x} {y}</p>

   </div>
  )
}

export default Keyboard