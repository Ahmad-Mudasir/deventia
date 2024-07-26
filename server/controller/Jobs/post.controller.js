const Job = require("../../Model/JobModel");

exports.postJob = async(req,res)=>{
    try{
        const {job_title,experience,job_description,location} = req.body;
        if(!job_title || !experience || !job_description){
            return res.status(400).json({message:"All fields are required"})
        }
        const job = new Job({
            job_title,
            experience,
            job_description,
            location
        })
        await job.save();
        res.json({message:"Job posted successfully",job})
    }catch(error){
        res.status(500).send({message:error.message})
    }
}