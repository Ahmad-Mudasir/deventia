const Job = require("../../Model/JobModel");

exports.postJob = async(req,res)=>{
    try{
        const {job_title,experience,job_description,location,job_type} = req.body;
        if(!job_title || !experience || !job_description || !location){
            return res.status(400).json({message:"All fields are required"})
        }
        const job = new Job({
            job_title,
            experience,
            job_description,
            location,
            job_type
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
exports.updateJob = async(req,res)=>{
    try{
        const {job_title,experience,job_description,location,job_type} = req.body;
        if(!job_title || !experience || !job_description || !location || !job_type){
            return res.status(400).json({message:"All fields are required"})
        }
        const job = await Job.findByIdAndUpdate(req.params.id,{
            job_title,
            experience,
            job_description,
            location,
            job_type
        },{new:true})
        res.json({message:"Job updated successfully",job})
    }catch(error){
        res.status(500).send({message:error.message})
    }
}

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





