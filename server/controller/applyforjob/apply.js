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
async function apply(senderEmail, message, firstName, lastName, middleName, date, mobileNumber, file) {
    try {
        const subject = 'Job Application'; 
        const attachments = file ? [{
            filename: file,
            path: path.join(__dirname, file),
        }] : [];

        const info = await transporter.sendMail({
            from: 'abdulmajid1m2@gmail.com',
            to: 'abdulmajid1m2@gmail.com',
            subject: subject,
            text: message,
            html: `
                <p><strong>Email:</strong> ${senderEmail}</p>
                <p><strong>First Name:</strong> ${firstName}</p>
                <p><strong>Last Name:</strong> ${lastName}</p>
                <p><strong>Middle Name:</strong> ${middleName || 'N/A'}</p>
                <p><strong>Date:</strong> ${date}</p>
                <p><strong>Mobile Number:</strong> ${mobileNumber}</p>
                <p><strong>Message:</strong> ${message}</p>
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
        senderEmail,
        message,
        firstName,
        lastName,
        middleName,
        date,
        mobileNumber,
        file,
    } = req.body; // Extract details from request body

    if (!senderEmail || !message || !firstName || !lastName || !middleName || !date || !mobileNumber || !file) {
        return res.status(400).json({
            message: 'All fields are required.',
        });
    }

    try {
        const info = await apply(senderEmail, message, firstName, lastName, middleName, date, mobileNumber, file);
        res.status(200).json({
            message: 'Mail has been sent successfully',
            messageId: info.messageId,
        });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({
            message: 'Error sending email',
            error: error.toString(),
        });
    }
};

module.exports = applyJob;