'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const EditJobModal = ({
  job,
  onClose,
  onSave
}: {
  job: any;
  onClose: () => void;
  onSave: (updatedJob: any) => void;
}) => {
  const [jobTitle, setJobTitle] = useState(job.job_title);
  const [experience, setExperience] = useState(job.experience);
  const [jobDescription, setJobDescription] = useState(job.job_description);
  const [jobType, setJobType] = useState(job.job_type);
  const [location, setLocation] = useState(job.location);
  const [seodescrription, setseodescrription]= useState(job.seo_description);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const updatedJob = {
      job_title: jobTitle,
      experience,
      job_description: jobDescription,
      job_type: jobType,
      location,
      seodescrription,
    };

    try {
      await axios.put(`http://localhost:4000/job/update/${job._id}`, updatedJob);
      onSave(updatedJob);
      onClose();
    } catch (error) {
      console.error(error);
      alert('Error updating job');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10">
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
              value={seodescrription}
              onChange={(e) => setseodescrription(e.target.value)}
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
            <button type="button" onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded">
              Cancel
            </button>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
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
  onEdit
}: {
  title: string;
  description: string;
  jobType: string;
  location: string;
  experience: string;
  jobId: string;
  onDelete: (id: string) => void;
  onEdit: (job: any) => void;
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
    onEdit({ job_title: title, job_description: description, job_type: jobType, location, experience, _id: jobId });
  };

  return (
    
    <div className="border-[1px] border-[#5357689d] p-8 bg-gradient-to-b from-[rgba(117,113,230,0.21)] to-[rgba(65,63,128,0.21)]">
      
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
        <button onClick={handleEdit} className="bg-[#7471E6] border-2 border-[#7471E6] hover:bg-transparent px-4 py-2 rounded">
          Edit
        </button>
      </div>
    </div>
  );
};

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [editingJob, setEditingJob] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:4000/job/get')
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
    axios.delete(`http://localhost:4000/job/delete/${id}`)
      .then(() => {
        setJobs(jobs.filter((job: any) => job._id !== id));
      })
      .catch((error) => {
        console.error(error);
        alert('Error deleting job');
      });
  };

  const saveJob = (updatedJob: any) => {
    setJobs(jobs.map((job: any) => (job._id === updatedJob._id ? updatedJob : job)));
  };

  const closeEditModal = () => {
    setEditingJob(null);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/Careers/login');
  };
  return (
    <div >
      <div className='p-4 flex flex-row gap-4'>
        <Link
        href={'/Careers/jobpost'}
        >
       <button className='mt-14 bg-[#7471E6] border-2 border-[#7471E6] hover:bg-transparent px-4 py-2 rounded'>Add Job</button>
       </Link>
       
       <button 
       onClick={handleLogout}
       className='mt-14 bg-[#7471E6] border-2 border-[#7471E6] hover:bg-transparent px-4 py-2 rounded'>logout</button>
       
       </div>
    <div className=" container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
     
      {jobs.map((job: any) => (
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
