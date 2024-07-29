
import React from 'react';

const Login = () => {
  
  return (
    <div className="p-10 text-white flex justify-center items-center flex-col">
      <h2 className="text-2xl mb-4 mt-12 text-center">Login</h2>
      <form className="flex flex-col w-full max-w-sm mt-4">
        <div className="form-group mb-4">
          <label className="block mb-1 ml-4">Email</label>
          <input 
            type="text" 
            name="email"
            placeholder="Enter your Email" 
            className="w-full px-4 py-2 bg-gray-800 text-white" 
            style={{ borderRadius: "19px" }} 
            required
          />
        </div>
       
        <div className="form-group mb-4">
          <label className="block mb-1 ml-4">Password</label>
          <input 
            type="password" 
            name="password"
            placeholder="Enter your Password" 
            className="w-full px-4 py-2 bg-gray-800 text-white" 
            style={{ borderRadius: "19px" }} 
            required
          />
        </div>
          
        <div className="flex justify-center">
          <button 
            type="submit" 
            className="px-8 py-2 bg-gray-800 text-white" 
            style={{ borderRadius: "19px" }}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
