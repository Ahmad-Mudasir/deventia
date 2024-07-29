'use client';

import { FaFile, FaFileUpload } from 'react-icons/fa';
import SubmitApplicationPopup from './SubmitApplicationPopup';
import axios from 'axios';
import { useState } from 'react';

const JobApplication = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [applicationData, setApplicationData] = useState({
    firstName: '',
    lastName: '',
    middleName: '',
    birthDate: '',
    email: '',
    phoneNumber: '',
    aboutYou: '',
    // file: null as File | null, // Change to null initially
  });

  // Handle text and date input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setApplicationData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle file input change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setApplicationData((prevData) => ({
      ...prevData,
      file,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(applicationData);
  
    // Check for validation
    const { firstName, lastName, birthDate, email, phoneNumber, aboutYou } = applicationData;
    if (!firstName || !lastName || !birthDate || !email || !phoneNumber || !aboutYou) {
      alert('Please fill in all required fields.');
      return;
    }
  
    const formData = new FormData();
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('middleName', applicationData.middleName || ''); // Optional field
    formData.append('birthDate', birthDate);
    formData.append('email', email);
    formData.append('phoneNumber', phoneNumber);
    formData.append('aboutYou', aboutYou);
  
    // if (applicationData.file) {
    //   formData.append('file', applicationData.file);
    // }
  
    try {
      const response = await axios.post("http://localhost:4000/jobapply", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
  
      console.log("Success:", response.data);
      setShowPopup(true);
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
    }
  };
  

  // Handle file removal
  const handleFileRemove = () => {
    setApplicationData((prevData) => ({
      ...prevData,
      file: null,
    }));
  };

  return (
    <form className="bg-[#7571e618] p-8 w-full grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12" onSubmit={handleSubmit}>
      <h1 className="font-bold text-lg md:text-xl mb-8 col-span-1 md:col-span-3">
        Software Engineer
      </h1>
      <label className="flex flex-col gap-2 text-base text-[#E9E9E9] font-medium w-full">
        First Name
        <input
          type="text"
          name="firstName"
          value={applicationData.firstName}
          onChange={handleChange}
          placeholder="Write here"
          className="outline-none px-6 py-3 text-base placeholder:text-[#8B8B8B] text-[#E9E9E9] bg-[#fbfbfba1] border-[1.09px] border-[#7571e69a]"
        />
      </label>
      <label className="flex flex-col gap-2 text-base text-[#E9E9E9] font-medium w-full">
        Middle Name
        <input
          type="text"
          name="middleName"
          value={applicationData.middleName}
          onChange={handleChange}
          placeholder="Write here"
          className="outline-none px-6 py-3 text-base placeholder:text-[#8B8B8B] text-[#E9E9E9] bg-[#fbfbfba1] border-[1.09px] border-[#7571e69a]"
        />
      </label>
      <label className="flex flex-col gap-2 text-base text-[#E9E9E9] font-medium w-full">
        Last Name
        <input
          type="text"
          name="lastName"
          value={applicationData.lastName}
          onChange={handleChange}
          placeholder="Write here"
          className="outline-none px-6 py-3 text-base placeholder:text-[#8B8B8B] text-[#E9E9E9] bg-[#fbfbfba1] border-[1.09px] border-[#7571e69a]"
        />
      </label>
      <label className="flex flex-col gap-2 text-base text-[#E9E9E9] font-medium w-full">
        Birth Date
        <input
          type="date"
          name="birthDate"
          value={applicationData.birthDate}
          onChange={handleChange}
          className="outline-none px-6 py-3 text-base placeholder:text-[#8B8B8B] text-[#E9E9E9] bg-[#fbfbfba1] border-[1.09px] border-[#7571e69a]"
        />
      </label>
      <label className="flex flex-col gap-2 text-base text-[#E9E9E9] font-medium w-full">
        Email Address
        <input
          type="email"
          name="email"
          value={applicationData.email}
          onChange={handleChange}
          placeholder="Write here"
          className="outline-none px-6 py-3 text-base placeholder:text-[#8B8B8B] text-[#E9E9E9] bg-[#fbfbfba1] border-[1.09px] border-[#7571e69a]"
        />
      </label>
      <label className="flex flex-col gap-2 text-base text-[#E9E9E9] font-medium w-full">
        Phone Number
        <input
          type="tel"
          name="phoneNumber"
          value={applicationData.phoneNumber}
          onChange={handleChange}
          placeholder="Write here"
          className="outline-none px-6 py-3 text-base placeholder:text-[#8B8B8B] text-[#E9E9E9] bg-[#fbfbfba1] border-[1.09px] border-[#7571e69a]"
        />
      </label>
      <label className="flex flex-col gap-2 text-base text-[#E9E9E9] font-medium w-full col-span-1 md:col-span-3">
        About You
        <textarea
          name="aboutYou"
          value={applicationData.aboutYou}
          onChange={handleChange}
          placeholder="Write here"
          className="outline-none px-6 py-3 text-base placeholder:text-[#8B8B8B] text-[#E9E9E9] bg-[#fbfbfba1] border-[1.09px] border-[#7571e69a] resize-none"
          rows={5}
        ></textarea>
      </label>
      <p className="text-base text-[#E9E9E9] font-medium col-span-1 md:col-span-3 -mb-8">
        Attach your resume
      </p>
      <label className="relative flex flex-col gap-2 w-full">
        <input
          type="file"
          name="file"
          onChange={handleFileChange}
          className="w-[0.01px] h-[0.01px] absolute"
        />
        <div className="flex gap-4 text-[#E9E9E9] bg-[#f5f5f5cc] border-2 border-[#b0b0b0] border-dashed p-4 w-full cursor-pointer">
          <div className="p-4 rounded-xl bg-[#6366F1]">
            <FaFileUpload size={20} />
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-[#535768] font-semibold text-base">
              Upload Files
            </h4>
            <p className="text-xs text-[#A5A5A5]">PDF, JPG, PNG</p>
          </div>
        </div>
      </label>

      {applicationData.file && (
        <div className="relative flex gap-4 text-[#E9E9E9] bg-transparent border-2 border-[#6366F1] p-4 w-full h-fit">
          <div className="absolute -right-[13px] -top-[13px] bg-red-500 text-white size-[26px] font-bold flex items-center justify-center rounded-full cursor-pointer" onClick={handleFileRemove}>
            x
          </div>
          <div className="p-4 rounded-xl bg-[#f6eeffe7] flex items-center justify-center">
            <FaFile className="text-[#6366F1]" size={20} />
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-base">{applicationData.file.name}</h4>
            <p className="text-sm text-[#6366F1]">{Math.round(applicationData.file.size / 1024)} KB</p>
          </div>
        </div>
      )}

      <button
        type="submit"
        className="bg-[#6366F1] px-12 py-3 font-semibold text-balance w-fit block mx-auto col-span-1 md:col-span-3"
      >
        Submit
      </button>

      {showPopup && <SubmitApplicationPopup setShowPopup={setShowPopup} />}
    </form>
  );
};

export default JobApplication;
