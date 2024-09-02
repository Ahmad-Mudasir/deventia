'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ImSpinner8 } from 'react-icons/im';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';

const modules = {
  toolbar: {
    container: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'blockquote'],
      [{ color: [] }],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image'],
      ['clean'],
    ],
  },
  clipboard: {
    matchVisual: true,
  },
};
const formats = [
  'header',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'clean',
];

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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

    try {
      const response = await axios.post(
        'http://localhost:4000/job/post',
        jobData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log('Success:', response.data);
      toast.success('Job posted successfully');
      router.push('/Careers/showjobs'); // Redirect to another page after successful submission
      setFormData({
        jobTitle: '',
        location: '',
        jobType: '',
        experience: '',
        jobDescription: '',
        seodescription: '',
      });
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error('Error response:', error.response?.data);
        toast.error(
          `Error: ${error.response?.data.message || 'Something went wrong'}`
        );
      } else if (error instanceof Error) {
        console.error('Error message:', error.message);
        toast.error('An unexpected error occurred');
      } else {
        console.error('Error message:', error);
        toast.error('An unexpected error occurred');
      }
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-white">
        <ImSpinner8 size={30} className="animate-spin" />
      </div>
    );
  }

  return (
    <div className="p-12 bg-gray-900 text-white min-h-screen">
      <ToastContainer />
      <h2 className="text-3xl font-bold mb-6 mt-4 ml-4 text-white">
        Create New Job
      </h2>
      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 md:px-10 mt-8 bg-gray-800 rounded-lg shadow-lg p-6"
        onSubmit={handleSubmit}
      >
        <div className="form-group">
          <label className="block mb-2 font-semibold text-gray-300 ml-4">
            Job Title
          </label>
          <input
            type="text"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            placeholder="Software Engineer"
            className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
            required
          />
        </div>

        <div className="form-group">
          <label className="block mb-2 font-semibold text-gray-300 ml-4">
            Location
          </label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Manseera, Pakistan"
            className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
            required
          />
        </div>

        <div className="form-group">
          <label className="block mb-2 font-semibold text-gray-300 ml-4">
            Job Type
          </label>
          <input
            type="text"
            name="jobType"
            value={formData.jobType}
            onChange={handleChange}
            placeholder="Enter Job Type"
            className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
            required
          />
        </div>

        <div className="form-group">
          <label className="block mb-2 font-semibold text-gray-300 ml-4">
            Experience
          </label>
          <select
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
            required
          >
            <option value="">Choose Experience</option>
            <option value="0-1 years">0-1 years experience</option>
            <option value="1-3 years">1-3 years experience</option>
            <option value="3-5 years">3-5 years experience</option>
          </select>
        </div>

        <div className="form-group">
          <label className="block mb-2 font-semibold text-gray-300 ml-4">
            SEO Description
          </label>
          <input
            name="seodescription"
            value={formData.seodescription}
            onChange={handleChange}
            placeholder="SEO Description"
            className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
          />
        </div>

        <div className="col-span-1 md:col-span-2 form-group">
          <label className="block mb-2 font-semibold text-gray-300 ml-4">
            Job Description
          </label>
          <textarea
            name="jobDescription"
            value={formData.jobDescription}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out h-32"
            required
          ></textarea>
          {/* <ReactQuill
            value={formData.jobDescription}
            modules={modules}
            formats={formats}
            className="h-[90%]"
            name="jobDescription"
            onChange={handleChange}
            // onChange={(newrequirments) => {
            //   setrequirments(newrequirments);
            // }}
          /> */}
        </div>

        <div className="col-span-1 md:col-span-2 flex justify-end">
          <button
            type="submit"
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg shadow-md hover:from-blue-600 hover:to-blue-800 transition duration-300 ease-in-out"
          >
            Post Job
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateJobForm;
