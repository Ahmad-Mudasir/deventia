const express = require('express');
const multer = require('multer');
const path = require('path');

// Configure multer storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Specify the upload directory
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname); // Get the file extension
        const filename = `${Date.now()}${ext}`; // Use a timestamp to avoid name collisions
        cb(null, filename); // Set the file name
    }
});

const upload = multer({ storage: storage });

// Handle single file upload
const uploadFile = (req, res) => {
    console.log('File info:', req.file); // Log file info
    console.log('Form data:', req.body); // Log other form data

    if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded.' });
    }

    res.status(200).json({
        message: 'File uploaded successfully!',
        file: req.file
    });
};

exports.module = uploadFile ;