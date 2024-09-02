'use client';
import React, { useState } from 'react';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axiosInstance from '@/lib/axiosInstance';
import { euroStyle } from "@/utils/fonts";
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('login', {
        email,
        password,
      });
      localStorage.setItem('token', response.data.token);
      toast.success('Login successful');
      router.push('/Careers/jobpost');
    } catch (err: unknown) {
      let errorMessage = 'Login failed. Please try again.';
      if (err instanceof AxiosError && err.response?.data?.message) {
        errorMessage = err.response.data.message;
      }
      toast.error(errorMessage);
      setError(errorMessage);
    }
  };
  
  return (
    <div className="p-6 bg-[#8157c5] text-white flex justify-center items-center h-screen w-screen flex-col">
      <ToastContainer />
      <h1
          className={`font-bold text-3xl md:text-5xl lg:text-9xl tracking-wider ${euroStyle.className}`}>
          Login
      </h1>
      <form
        className="flex flex-col w-full max-w-sm mt-4"
        onSubmit={handleLogin}
      >
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-start h-fit">
          <label className="bg-white text-sm text-[#7571e6a2] font-bold flex flex-row p-4 gap-1 w-full col-span-2">
            Email:
            <input
              type="text"
              name="message"
              className="outline-none bg-transparent border-b-2 border-[#7571e6a2] w-full"
              required
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
          </label>
          <label className="bg-white text-sm text-[#7571e6a2] font-bold flex flex-row p-4 gap-1 w-full col-span-2">
            Password:
            <input
              type="text"
              name="message"
              className="outline-none bg-transparent border-b-2 border-[#7571e6a2] w-full"
              required
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
            />
          </label>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            // className="px-10 py-2 bg-gray-800 text-white text-2xl"
            className={`font-bold text-4xl bg-gray-800 px-8 mt-6 w-full py-2 tracking-wider ${euroStyle.className}`}
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
