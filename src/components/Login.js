import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
 
const Login = () => {
    const [name,setName] = useState("Enter ");
    const [mobnum,setMobnum] = useState("");
    const [email,setEmail] = useState("");

    const handleSubmit =(e) => {
        e.preventDefault();
        console.log ({
            name,
            mobnum,
            email,
        } );
        setName('');
        setEmail('');
        setMobnum('');
    };
    return (
        <form onSubmit={handleSubmit}>
     <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          maxLength="18" 
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
       <div>
        <label htmlFor="email">Email</label>
        <input
        type="email"
        id="email"
        value={email}
        onChange={(e)=> setEmail(e.target.value)}
        required
        />
       </div>
       <div>
        <label htmlFor="mobnum">Mobile Number</label>
        <input
          type="tel"
          id="mobnum"
          value={mobnum}
          placeholder="Enter your 10-digit contact number"
          maxLength="10"  
          onChange={(e) => setMobnum(e.target.value)} 
          required
        />
       </div>
      <button type="submit">Submit</button>
        </form>

    );
};
export default Login;