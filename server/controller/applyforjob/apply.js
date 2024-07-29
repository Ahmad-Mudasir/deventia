const nodemailer = require('nodemailer');
const path = require('path');

// Configure the transporter with your Gmail credentials
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'abdulmajid1m2@gmail.com',
        pass: 'cekpalvvmiqcxvje',
    },
});

// Function to send an email
async function apply(firstName, lastName, birthDate, email, phoneNumber, aboutYou, file) {
    try {
        const subject = 'Job Application'; 
        const attachments = file ? [{
            filename: file.originalname, // Use the original name of the uploaded file
            path: file.path, // Use the path where multer saved the file
        }] : [];

        const info = await transporter.sendMail({
            from: 'abdulmajid1m2@gmail.com',
            to: 'abdulmajid1m2@gmail.com',
            subject: subject,
            text: aboutYou,
            html: `
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>First Name:</strong> ${firstName}</p>
                <p><strong>Last Name:</strong> ${lastName}</p>
                <p><strong>Middle Name:</strong> ${req.body.middleName || 'N/A'}</p>
                <p><strong>Date:</strong> ${birthDate}</p>
                <p><strong>Mobile Number:</strong> ${phoneNumber}</p>
                <p><strong>Message:</strong> ${aboutYou}</p>
                ${file ? `<p><strong>CV:</strong> Attached</p>` : ''}
            `,
            attachments: attachments,
        });

        console.log('Message sent: %s', info.messageId);
        return info;
    } catch (error) {
        throw new Error(`Error sending email: ${error.message}`);
    }
}

// Express route handler to send an email
const applyJob = async (req, res) => {
    const {
        firstName, lastName, birthDate, email, phoneNumber, aboutYou
    } = req.body;
    const file = req.file; // Get the file from multer

    console.log(req.body)

    if (!firstName || !lastName || !birthDate || !email || !phoneNumber || !aboutYou) {
        return res.status(400).json({
            message: 'All required fields must be filled.',
        });
    }

    try {
        const info = await apply(firstName, lastName, birthDate, email, middleName, phoneNumber, aboutYou, file);
        res.status(200).json({
            message: 'Application submitted successfully.',
            messageId: info.messageId,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

module.exports = applyJob ;
