const Job = require("../../Model/JobModel");

exports.postJob = async(req,res)=>{
    try{
        const {job_title,experience,job_description,location, job_type} = req.body;
        if(!job_title || !experience || !job_description || !location){
            return res.status(400).json({message:"All fields are required"})
        }
        const job = new Job({
            job_title,
            experience,
            job_description,
            job_type,
            location
        })
        await job.save();
        res.json({message:"Job posted successfully",job})
    }catch(error){
        res.status(500).send({message:error.message})
    }
}


// get all jobs
exports.getJobs = async(req,res)=>{
    try{
        const jobs = await Job.find();
        res.json(jobs)
    }catch(error){
        res.status(500).send({message:error.message})
    }
}

// update job using id
exports.updateJob = async (req, res) => {
    try {
        const { job_title, experience, job_description, location, job_type } = req.body;
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
                location
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
};

// delete job using id
exports.deleteJob = async(req,res)=>{
    try{
        const job = await Job.findByIdAndDelete(req.params.id);
        if(!job) return res.status(400).json({message:"Job not found"})
        res.json({message:"Job deleted successfully",job})
    }catch(error){
        res.status(500).send({message:error.message})
    }
}





