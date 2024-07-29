const express = require('express');
const {
  postJob,
  getJobs,
  updateJob,
  deleteJob,
} = require('../controller/Jobs/post.controller');

const router = express.Router();
router.post('/job/post', postJob);
router.get('/job/get', getJobs);
router.put('/job/update/:id', updateJob);
router.delete('/job/delete/:id', deleteJob);

module.exports = router;
