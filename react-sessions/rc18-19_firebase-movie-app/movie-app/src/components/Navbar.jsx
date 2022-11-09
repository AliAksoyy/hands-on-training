
import React from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/icons/avatar.png"
import {  logout } from "../auth/firebase";
import { useLoginContext } from "../context/LoginProvider";

const Navbar = () => {

const {user}=useLoginContext()
console.log(user.email)

  const currentUser = {displayName:"Ali Aksoy"}
  return <div>
    <nav className="relative w-full fixed-top flex flex-wrap items-center justify-between py-3 bg-gray-900 text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light">
  <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
  
    
      <Link className="text-xl text-white pr-2 font-semibold" to="/">
        Movie App
      </Link>
    
  
   
    <div className="flex items-center relative">
      
      {currentUser && <h5 className="mr-2 capitalize">{currentUser?.displayName}</h5>}
    
      <div className="dropdown relative">
        <span
          className="dropdown-toggle flex items-center hidden-arrow"
          href="#"
          id="dropdownMenuButton2"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src={currentUser?.photoURL || avatar }
            className="rounded-full"
            style={{ height: 25, width: 25 }}
            alt="user"
            loading="lazy"
          />
        </span>
        <ul
          className="dropdown-menu min-w-max absolute  bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none left-auto right-0"
          aria-labelledby="dropdownMenuButton2"
        >
          <li>
            <Link
              className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
              to="/register"
            >
              Register
            </Link>
          </li>
          <li>
            <Link
              className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
              to="/login"
            >
              Login
            </Link>
          </li>
          <li>
            <span
              className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
              role="button" onClick={()=> logout()}

            >
              Logout
            </span>
          </li>
        </ul>
      </div>
    </div>
    {/* Right elements */}
  </div>
  <div className="h-[52px]"></div>

</nav>

  </div>;
};

export default Navbar;
