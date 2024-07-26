const express = require("express");
const { postJob } = require("../controller/Jobs/post.controller");
// import {postJob} = require("./server/Jobs/post.controller.js")
const router = express.Router();
router.post("/job/post", postJob)


module.exports = router