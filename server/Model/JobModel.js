<<<<<<< HEAD
const mongoose = require('mongoose');
const jobsSchema = new mongoose.Schema(
  {
=======
const mongoose = require("mongoose");
const jobsSchema = new mongoose.Schema({
>>>>>>> 6e9949e1a10c9e59f7c6d5e3e76a8db7a5cd7992
    job_title: {
      type: String,
      required: true,
    },
    experience: {
      type: String,
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
<<<<<<< HEAD
    job_type: {
      type: String,
      required: true,
      enum: [
        'Full-time',
        'Part-time',
        'Contract',
        'Internship',
        'Temporary',
        'Remote',
      ],
    },
    seo_description: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Job', jobsSchema);
=======
    seo_description: {
      type: String,
  
    },
  }, { timestamps: true });
  
  
module.exports = mongoose.model('Job', jobsSchema);
>>>>>>> 6e9949e1a10c9e59f7c6d5e3e76a8db7a5cd7992
