'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axiosInstance from '@/lib/axiosInstance';

const CreateJobForm = () => {
  const [formData, setFormData] = useState({
    jobTitle: '',
    location: '',
    jobType: '',
    experience: '',
    jobDescription: '',
    seodescription: '',
  });
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/Careers/login');
    } else {
      setLoading(false);
    }
  }, [router]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.values(formData).some((field) => field === '')) {
      toast.error('Please fill in all fields');
      return;
    }
    const jobData = {
      job_title: formData.jobTitle,
      job_type: formData.jobType,
      experience: formData.experience,
      job_description: formData.jobDescription,
      location: formData.location,
      seo_description: formData.seodescription,
    };
    axiosInstance
      .post('/job/post', jobData)
      .then((response) => {
        toast.success('Job posted successfully');
        router.push('/Careers/showjobs');
        setFormData({
          jobTitle: '',
          location: '',
          jobType: '',
          experience: '',
          jobDescription: '',
          seodescription: '',
        });
      })
      .catch((error) => {
        console.error(error);
        toast.error('Error posting job');
      });
  };

  if (loading) {
    return <p>Loading...</p>; // Render a loading message or spinner
  }

  return (
    <div className="p-10 text-white">
      <ToastContainer />
      <h2 className="text-2xl mb-4 mt-10 ml-4">Create new Job</h2>
      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-4 px-10 mt-8"
        onSubmit={handleSubmit}
      >
        <div className="form-group">
          <label className="block mb-1 ml-4">Job Title</label>
          <input
            type="text"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            placeholder="Software Engineer"
            className="w-full px-4 py-2 bg-gray-800 text-white"
            style={{ borderRadius: '19px' }}
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
            style={{ borderRadius: '19px' }}
            required
          />
        </div>

        <div className="form-group">
          <label className="block mb-1 ml-4">Job Type</label>
          <input
            type="text"
            name="jobType"
            value={formData.jobType}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-800 text-white"
            style={{ borderRadius: '19px' }}
            required
            placeholder="Enter Job type"
          />
        </div>

        <div className="form-group">
          <label className="block mb-1 ml-4">Experience</label>
          <select
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-800 text-white"
            style={{ borderRadius: '19px' }}
            required
          >
            <option value="">Choose experience</option>
            <option value="0-1 years">0-1 years experience</option>
            <option value="1-3 years">1-3 years experience</option>
            <option value="3-5 years">3-5 years experience</option>
          </select>
        </div>

        <div className="form-group">
          <label className="block mb-1 ml-4">SEO Description</label>
          <input
            name="seodescription"
            value={formData.seodescription}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-800 text-white"
            style={{ borderRadius: '19px' }}
            placeholder="SEO"
          />
        </div>
        <div className="col-span-1 md:col-span-2 form-group">
          <label className="block mb-1 ml-4">Job Description</label>
          <textarea
            name="jobDescription"
            value={formData.jobDescription}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-800 text-white h-32"
            style={{ borderRadius: '19px' }}
            required
          ></textarea>
        </div>

        <div className="col-span-1 md:col-span-2 flex justify-end">
          <button
            type="submit"
            className="px-8 py-2 bg-gray-800 text-white"
            style={{ borderRadius: '19px' }}
          >
            Post Job
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateJobForm;
