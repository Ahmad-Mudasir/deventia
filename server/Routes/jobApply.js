const express = require("express");
const applyJob = require("../controller/applyforjob/apply"); // Correct path

const router = express.Router();

router.post("/jobapply", applyJob); 

module.exports = router;


