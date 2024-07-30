'use client'
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/login', { email, password });
      localStorage.setItem('token', response.data.token);
      toast.success('Login successful');
      router.push('/Careers/showjobs');
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Login failed. Please try again.';
      toast.error(errorMessage);
    }
  };

  return (
    <div className="p-10 text-white flex justify-center items-center flex-col">
      <ToastContainer />
      <h2 className="text-2xl mb-4 mt-12 text-center">Login</h2>
      <form className="flex flex-col w-full max-w-sm mt-4" onSubmit={handleLogin}>
        <div className="form-group mb-4">
          <label className="block mb-1 ml-4">Email</label>
          <input
            type="text"
            name="email"
            placeholder="Enter your Email"
            className="w-full px-4 py-2 bg-gray-800 text-white"
            style={{ borderRadius: "19px" }}
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
        {error && <div className="text-red-500 mt-4">{error}</div>}
      </form>
    </div>
  );
};

export default Login;
