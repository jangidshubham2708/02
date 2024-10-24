import React from "react";
import ReactDOM from "react-dom/client";
import {  Img_Url } from "/src/elementary/URL";
import { useState } from "react"; 
import { Link } from "react-router-dom";
import logo from './logo.png';

const Header = () => {
    const [btnName,setBtnName] = useState("Login");
    const [logobtn,setLogobtn] = useState('');
    return (
        <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
      
      <div className="w-40 px-4 py-2 mx-[20]">
  <button
    onClick={() => {
      setLogobtn(logo); // Use setLogobtn to update the state
    }}
  >
    <Link to="/">
      <img src={logo} alt="Logo" />
    </Link>
  </button>
</div>
          <div className="flex items-center peer-hover content-stretch pr-[20]">
            <ul className="flex  ">
               <li className="font-bold size-24 px-20 py-7 pr-14 ">
               <Link to="/">Home</Link>
               </li>
               <li className="font-bold size-24 px-12 py-7 pr-14">
            <Link to="/about">About </Link>
          </li>
          <li className="font-bold size-24 px-12 py-7 pr-14">
            <Link to="/contact">Contact </Link>
          </li>
               <li className="font-bold size-24 px-12 py-7 pr-14">
                <Link to= "/cart">Cart</Link>
               </li>
               <button
            className="font-bold size-[80px] px-7 py-4 pr-24"
            onClick={() => {
              btnName === "Login"
                // ? setBtnName("Logout")
                // : setBtnName("Login");
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