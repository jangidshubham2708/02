import React, { useState } from "react";

const Login = () => {
    const [name, setName] = useState("");
    const [mobnum, setMobnum] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            name,
            mobnum,
            email,
        });
        setName("");
        setEmail("");
        setMobnum("");
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
            <div className="bg-white p-8 md:p-10 lg:p-12 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block font-bold text-l  text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            placeholder="Enter Your Name"
                            maxLength="18"
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block font-bold text-l  text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            placeholder="Enter Your Email Address"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label htmlFor="mobnum" className="block font-bold text-l  text-gray-700">
                            Mobile Number
                        </label>
                        <input
                            type="tel"
                            id="mobnum"
                            value={mobnum}
                            placeholder="Enter your 10-digit contact number"
                            maxLength="10"
                            onChange={(e) => setMobnum(e.target.value)}
                            required
                            className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold p-3 rounded-md transition duration-200"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
