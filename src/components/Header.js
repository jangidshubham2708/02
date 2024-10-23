import React from "react";
import ReactDOM from "react-dom/client";
import { Cart_Url, Img_Url } from "/src/elementary/URL";
import { useState } from "react"; 
import { Link } from "react-router-dom";
const Header = () => {
    const [btnName,setBtnName] = useState("loggedin");
    return (
      <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
     
          <div className="w-52">
            <img src={Img_Url} />
          </div>
          <div className="flex items-center">
            <ul className="flex p-4 m-4">
               <li className="px-4">
               <Link to="/">Home</Link>
               </li>
               <li>
            <Link to="/about">About Us</Link>
          </li>
               <li className="px-4 w-16 *:">
                <Link to= "/cart"><img src={Cart_Url} /></Link>
               </li>
               <button
            className="login"
            onClick={() => {
              btnName === "Login"
                ? setBtnName("Logout")
                : setBtnName("Login");
            }}
          >
              <Link to="/login"> {btnName}</Link>
                </button>
            </ul>
          </div>
        </div>
          
    );
};
export default Header;    