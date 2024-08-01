'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ImSpinner8 } from 'react-icons/im';
import axiosInstance from '@/lib/axiosInstance';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Define Job type
interface Job {
  _id: string;
  job_title: string;
  experience: string;
  job_description: string;
  job_type: string;
  location: string;
  seo_description: string;
}

const EditJobModal = ({
  job,
  onClose,
  onSave,
}: {
  job: Job;
  onClose: () => void;
  onSave: (updatedJob: Job) => void;
}) => {
  const [jobTitle, setJobTitle] = useState(job.job_title);
  const [experience, setExperience] = useState(job.experience);
  const [jobDescription, setJobDescription] = useState(job.job_description);
  const [jobType, setJobType] = useState(job.job_type);
  const [location, setLocation] = useState(job.location);
  const [seoDescription, setSeoDescription] = useState(job.seo_description);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const updatedJob = {
      _id: job._id, // Include _id in the updated job
      job_title: jobTitle,
      experience,
      job_description: jobDescription,
      job_type: jobType,
      location,
      seo_description: seoDescription,
    };

    try {
      await axiosInstance.put(`/job/update/${job._id}`, updatedJob);
      onSave(updatedJob);
      toast.success('job updated successfully');
      onClose();
    } catch (error) {
      console.error(error);
      toast.error('Error updating the job');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10">
      <ToastContainer />
      <div className="bg-white text-black p-8 rounded max-h-[80%] w-full max-w-lg overflow-auto">
        <h2 className="text-2xl mb-4">Edit Job</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label>Job Title</label>
            <input
              type="text"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label>Experience</label>
            <input
              type="text"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label>Job Description</label>
            <textarea
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label>Job Type</label>
            <input
              type="text"
              value={jobType}
              onChange={(e) => setJobType(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label>Seo Description</label>
            <input
              type="text"
              value={seoDescription}
              onChange={(e) => setSeoDescription(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label>Location</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const ShowJobs = ({
  title,
  description,
  jobType,
  location,
  experience,
  jobId,
  onDelete,
  onEdit,
}: {
  title: string;
  description: string;
  jobType: string;
  location: string;
  experience: string;
  jobId: string;
  onDelete: (id: string) => void;
  onEdit: (job: Job) => void;
}) => {
  const handleDelete = () => {
    onDelete(jobId);
  };
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/Careers/login');
    } else {
      setLoading(false);
    }
  }, [router]);

  const handleEdit = () => {
    onEdit({
      job_title: title,
      job_description: description,
      job_type: jobType,
      location,
      experience,
      seo_description: '',
      _id: jobId,
    });
  };

  return (
    <div className="border-[1px] border-[#5357689d] p-8 bg-gradient-to-b from-[rgba(117,113,230,0.21)] to-[rgba(65,63,128,0.21)]">
      <ToastContainer />

      <h2 className="font-bold text-2xl md:text-3xl mb-4">{title}</h2>
      <div className="text-base text-[#C0C0C0] border-b-[1.5px] border-dashed border-[#c0c0c07c] pb-4">
        <p>{description}</p>
        <h3 className="mt-6">{experience}</h3>
      </div>
      <div className="flex flex-wrap gap-4 items-center mt-6">
        <h3 className="font-bold text-xl md:text-2xl">{jobType}</h3>
        <p className="text-base text-[#A7A7A7] mr-auto">{location}</p>

        <button
          onClick={handleDelete}
          className="bg-[#7471E6] border-2 border-[#7471E6] hover:bg-transparent px-4 py-2 rounded"
        >
          Delete
        </button>
        <button
          onClick={handleEdit}
          className="bg-[#7471E6] border-2 border-[#7471E6] hover:bg-transparent px-4 py-2 rounded"
        >
          Edit
        </button>
      </div>
    </div>
  );
};

const JobList = () => {
  const router = useRouter();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [editingJob, setEditingJob] = useState<Job | null>(null);

  useEffect(() => {
    axiosInstance
      .get('/job/get')
      .then((response) => {
        setJobs(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError('Error fetching jobs');
        setLoading(false);
      });
  }, []);

  const deleteJob = (id: string) => {
    axiosInstance
      .delete(`/job/delete/${id}`)
      .then(() => {
        toast.success('job deleted successfully');
        setJobs(jobs.filter((job) => job._id !== id));
      })
      .catch((error) => {
        console.error(error);
        toast.error('Error Deleting the job');
      });
  };

  const saveJob = (updatedJob: Job) => {
    setJobs(jobs.map((job) => (job._id === updatedJob._id ? updatedJob : job)));
  };

  const closeEditModal = () => {
    setEditingJob(null);
  };

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen text-white">
        <ImSpinner8 size={30} className="animate-spin" />
      </div>
    );
  if (error) return <p>{error}</p>;

  const handleLogout = () => {
    localStorage.removeItem('token');
    toast.success('Logout successful');
    router.push('/Careers/login');
  };

  return (
    <div>
      <ToastContainer />

      <div className="p-4 flex flex-row gap-4">
        <Link href={'/Careers/jobpost'}>
          <button className="mt-14 bg-[#7471E6] border-2 border-[#7471E6] hover:bg-transparent px-4 py-2 rounded">
            Add Job
          </button>
        </Link>
        <button
          onClick={handleLogout}
          className="mt-14 bg-[#7471E6] border-2 border-[#7471E6] hover:bg-transparent px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>
      <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {jobs.map((job) => (
          <ShowJobs
            key={job._id}
            jobId={job._id}
            title={job.job_title}
            description={job.job_description}
            experience={job.experience}
            jobType={job.job_type}
            location={job.location}
            onDelete={deleteJob}
            onEdit={setEditingJob}
          />
        ))}
        {editingJob && (
          <EditJobModal
            job={editingJob}
            onClose={closeEditModal}
            onSave={saveJob}
          />
        )}
      </div>
    </div>
  );
};

export default JobList;
