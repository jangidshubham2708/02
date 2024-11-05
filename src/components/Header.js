import React from "react";
import { useState } from "react"; 
import { Link } from "react-router-dom";
import logo from './logo.png';
import { useSelector } from "react-redux";

const Header = () => {
    const [btnName,setBtnName] = useState("Login");
    const [logobtn,setLogobtn] = useState('');
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);
    return (
        <div className="flex justify-between bg-gradient-to-r from-orange-200 to-orange-400">
      
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
               <li className="font-bold text-2xl px-2 py-7 pr-14 ">
               <Link to="/">Home</Link>
               </li>
               <li className="font-bold text-2xl px-2 py-7 pr-14">
            <Link to="/about">About </Link>
          </li>
          <li className="font-bold text-2xl px-2 py-7 pr-14">
            <Link to="/contact">Contact </Link>
          </li>
          <li className="font-bold text-2xl px-2 py-7 pr-14">
            <Link to="/cart">Cart - ({cartItems.length} items)</Link>
          </li>
               <button
            className="font-bold text-2xl px-2 py-4 pr-24"
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