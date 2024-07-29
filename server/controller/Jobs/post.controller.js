const Job = require("../../Model/JobModel");

exports.postJob = async(req,res)=>{
    try{
<<<<<<< HEAD
        const {job_title,experience,job_description,location, job_type} = req.body;
=======
        const {job_title,experience,job_description,location,job_type,seo_description} = req.body;
>>>>>>> 0cedf457d1fad5e9667e6a2a23d2c934a50c48a8
        if(!job_title || !experience || !job_description || !location){
            return res.status(400).json({message:"All fields are required"})
        }
        const job = new Job({
            job_title,
            experience,
            job_description,
<<<<<<< HEAD
            job_type,
            location
=======
            location,
            job_type,
            seo_description
>>>>>>> 0cedf457d1fad5e9667e6a2a23d2c934a50c48a8
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
<<<<<<< HEAD
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
=======
exports.updateJob = async(req,res)=>{
    try{
        const {job_title,experience,job_description,location,job_type,seo_description} = req.body;
        if(!job_title || !experience || !job_description || !location || !job_type){
            return res.status(400).json({message:"All fields are required"})
        }
        const job = await Job.findByIdAndUpdate(req.params.id,{
            job_title,
            experience,
            job_description,
            location,
            job_type,
            seo_description
        },{new:true})
        res.json({message:"Job updated successfully",job})
    }catch(error){
        res.status(500).send({message:error.message})
>>>>>>> 0cedf457d1fad5e9667e6a2a23d2c934a50c48a8
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





