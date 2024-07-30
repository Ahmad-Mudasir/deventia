const Job = require('../../Model/JobModel');

<<<<<<< HEAD
exports.postJob = async (req, res) => {
  try {
    const {
      job_title,
      experience,
      job_description,
      location,
      job_type,
      seo_description,
    } = req.body;
    if (!job_title || !experience || !job_description || !location) {
      return res.status(400).json({ message: 'All fields are required' });
=======
exports.postJob = async(req,res)=>{
    try{
        const {job_title,experience,job_description,location, job_type,seo_description} = req.body;
        if(!job_title || !experience || !job_description || !location){
            return res.status(400).json({message:"All fields are required"})
        }
        const job = new Job({
            job_title,
            experience,
            job_description,
            job_type,
            location,
            seo_description
        })
        await job.save();
        res.json({message:"Job posted successfully",job})
    }catch(error){
        res.status(500).send({message:error.message})
>>>>>>> 6e9949e1a10c9e59f7c6d5e3e76a8db7a5cd7992
    }
    const job = new Job({
      job_title,
      experience,
      job_description,
      location,
      job_type,
      seo_description,
    });
    await job.save();
    res.json({ message: 'Job posted successfully', job });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// get all jobs
exports.getJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// update job using id
exports.updateJob = async (req, res) => {
<<<<<<< HEAD
  try {
    const {
      job_title,
      experience,
      job_description,
      location,
      job_type,
      seo_description,
    } = req.body;
    if (
      !job_title ||
      !experience ||
      !job_description ||
      !location ||
      !job_type
    ) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    const job = await Job.findByIdAndUpdate(
      req.params.id,
      {
        job_title,
        experience,
        job_description,
        location,
        job_type,
        seo_description,
      },
      { new: true }
    );
    res.json({ message: 'Job updated successfully', job });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
=======
    try {
        const { job_title, experience, job_description, location, job_type, seo_description } = req.body;
        const jobId = req.params.id;

        if (!job_title || !experience || !job_description || !location || !job_type) {
            return res.status(400).json({ message: "All fields are required" });
        }

       
        const updatedJob = await Job.findByIdAndUpdate(
            jobId,
            {
                job_title,
                experience,
                job_description,
                job_type,
                location,
                seo_description
            },
            { new: true }
        );

        if (!updatedJob) {
            return res.status(500).json({ message: "Error updating job" });
        }

        res.json({ message: "Job updated successfully", job: updatedJob });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
>>>>>>> 6e9949e1a10c9e59f7c6d5e3e76a8db7a5cd7992
};

// delete job using id
exports.deleteJob = async (req, res) => {
  try {
    const job = await Job.findByIdAndDelete(req.params.id);
    if (!job) return res.status(400).json({ message: 'Job not found' });
    res.json({ message: 'Job deleted successfully', job });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
