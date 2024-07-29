'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ShowJobs = ({
  title,
  description,
  jobType,
  location,
  experience,
  jobId,
  onDelete
}: {
  title: string;
  description: string;
  jobType: string;
  location: string;
  experience: string;
  jobId: string;
  onDelete: (id: string) => void;
}) => {
  const handleDelete = () => {
    onDelete(jobId);
  };

  return (
    <div className="border-[1px] border-[#5357689d] p-8 bg-gradient-to-b from-[rgba(117,113,230,0.21)] to-[rgba(65,63,128,0.21)] ">
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
        <button className="bg-[#7471E6] border-2 border-[#7471E6] hover:bg-transparent px-4 py-2 rounded">Edit</button>
      </div>
    </div>
  );
};

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-4 mt-24">
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
        />
      ))}
    </div>
  );
};

export default JobList;
