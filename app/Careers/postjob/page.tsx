'use client'
import React, { useState } from 'react';

const CreateJobForm = () => {
  const [formData, setFormData] = useState({
    jobTitle: '',
    location: '',
    jobType: '',
    jobDescription: '',
    datePosted: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if all fields are filled
    if (Object.values(formData).some(field => field === '')) {
      alert('Please fill in all fields');
      return;
    }
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // Clear the form
    setFormData({
      jobTitle: '',
      location: '',
      jobType: '',
      jobDescription: '',
      datePosted: ''
    });
  };

  return (
    <div className="p-10 text-white">
      <h2 className="text-2xl mb-4 mt-10 ml-4">Create new Job</h2>
      <form className="grid grid-cols-2 gap-4 px-10 mt-8" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="block mb-1 ml-4">Job Title</label>
          <input 
            type="text" 
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            placeholder="Software Engineer" 
            className="w-full px-4 py-2 bg-gray-800 text-white" 
            style={{ borderRadius: "19px" }} 
            required
          />
        </div>
       
        <div className="form-group">
          <label className="block mb-1 ml-4">Location</label>
          <input 
            type="text" 
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Manseera, Pakistan" 
            className="w-full px-4 py-2 bg-gray-800 text-white" 
            style={{ borderRadius: "19px" }} 
            required
          />
        </div>
        
        <div className="form-group">
          <label className="block mb-1 ml-4">Job Type</label>
          <select 
            name="jobType"
            value={formData.jobType}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-800 text-white" 
            style={{ borderRadius: "19px" }}
            required
          >
            <option value="">Select Job Type</option>
            <option value="Internship">Internship</option>
            <option value="0-1 years experience">0-1 years experience</option>
            <option value="3-5 years experience">3-5 years experience</option>
          </select>        
        </div>

        <div className="form-group">
          <label className="block mb-1 ml-4">Date Posted</label>
          <input 
            type="date" 
            name="datePosted"
            value={formData.datePosted}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-800 text-white" 
            style={{ borderRadius: "19px" }} 
            required
          />
        </div>
        
        <div className="col-span-2 form-group">
          <label className="block mb-1 ml-4">Job Description</label>
          <textarea 
            name="jobDescription"
            value={formData.jobDescription}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-800 text-white h-32" 
            style={{ borderRadius: "19px" }} 
            required
          ></textarea>
        </div>

        <div className="col-span-2 flex justify-end">
          <button 
            type="submit" 
            className="px-8 py-2 bg-gray-800 text-white" 
            style={{ borderRadius: "19px" }}
          >
            Post Job
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateJobForm;
