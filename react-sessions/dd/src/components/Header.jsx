import React from 'react'
import img from "../assets/task.png"
const Header = () => {
  return ( <>
    <div className='d-flex justify-content-around align-items-center'>
        <img style={{width:"7rem"}} src={img} alt="s" />
        <h2>TASK TRACKER</h2>
    </div>
    <div className="d-flex justify-content-center">
        <button className="btn btn-danger mt-2 p-1">Hide Task Bar</button>
    </div>
    </>)
}

export default Header