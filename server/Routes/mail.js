const express = require("express");
const sendMail = require("../controller/mail/sendMail"); // Correct path

const router = express.Router();

router.post("/mail", sendMail); 

module.exports = router;
