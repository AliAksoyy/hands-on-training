import React from 'react'
import img from "../assets/task.png"
const Header = ({show,setShow}) => {
  return ( <>
    <div className='d-flex justify-content-around align-items-center'>
        <img style={{width:"7rem"}} src={img} alt="s" />
        <h2>TASK TRACKER</h2>
    </div>
    <div className="d-flex justify-content-center">
        <button onClick={()=> setShow(!show)} className="btn btn-danger mt-2 p-1">
            {show ? "HİDE" :"SHOW"}
        </button>
    </div>
    </>)
}

export default Header