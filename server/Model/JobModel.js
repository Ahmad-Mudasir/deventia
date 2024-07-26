const mongoose = require("mongoose");
const jobsSchema = new mongoose.Schema({
    job_title: {
      type: String,
      required: true,
    },
    experience: {
      type: Number,
      required: true,
    },
    job_description: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
  }, { timestamps: true });
  
  module.exports = mongoose.model('Job', jobsSchema);