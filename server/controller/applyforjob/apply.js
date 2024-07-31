const nodemailer = require('nodemailer');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Ensure upload directory exists
const uploadDir = path.join(__dirname, 'upload');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, {
    recursive: true
  });
}

// Configure multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({
  storage
});

// Configure nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'abdulmajid1m2@gmail.com',
    pass: 'cekpalvvmiqcxvje',
  },
});


async function sendCongratulatoryEmail(userEmail) {
  try {
    const mailOptions = {
      from: 'abdulmajid1m2@gmail.com',
      to: userEmail,
      subject: 'Congratulations on Your Application!',
      text: 'Thank you for applying. We have received your application and will review it shortly.',
      html: `
        <p>Dear Applicant,</p>
        <p>Thank you for applying for the position. We have received your application and will review it shortly.</p>
        <p>Best Regards,</p>
        <p>The Recruitment Team</p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Congratulatory email sent: %s', info.messageId);
    return info;
  } catch (error) {
    throw new Error(`Error sending congratulatory email: ${error.message}`);
  }
}


async function sendEmail(
  firstName,
  lastName,
  middleName,
  birthDate,
  email,
  phoneNumber,
  aboutYou,
  filePath
) {
  // reply(email)
  try {
    const mailOptions = {
      from: 'abdulmajid1m2@gmail.com',
      to: 'abdulmajid1m2@gmail.com',
      subject: 'Job Application',
      text: aboutYou,
      html: `
                <p><strong>Full Name:</strong> ${firstName} ${middleName} ${lastName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone Number:</strong> ${phoneNumber}</p>
                <p><strong>Birth Date:</strong> ${birthDate}</p>
                <p><strong>About You:</strong> ${aboutYou}</p>
            `,
    };

    if (filePath) {
      mailOptions.attachments = [{
        filename: path.basename(filePath),
        path: filePath,
      }, ];
    }

    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
    return info;
  } catch (error) {
    throw new Error(`Error sending email: ${error.message}`);
  }
}

const applyJob = async (req, res) => {
  upload.single('file')(req, res, async (err) => {
    if (err) {
      return res.status(500).json({
        message: 'Error uploading file',
        error: err.toString(),
      });
    }

    const {
      firstName,
      lastName,
      middleName,
      birthDate,
      email,
      phoneNumber,
      aboutYou
    } = req.body;
    const file = req.file;

    const trimmedData = {
      firstName: firstName ? firstName.trim() : '',
      lastName: lastName ? lastName.trim() : '',
      middleName: middleName ? middleName.trim() : '',
      birthDate: birthDate ? birthDate.trim() : '',
      email: email ? email.trim() : '',
      phoneNumber: phoneNumber ? phoneNumber.trim() : '',
      aboutYou: aboutYou ? aboutYou.trim() : '',
    };

    if (!trimmedData.firstName || !trimmedData.lastName || !trimmedData.middleName || !trimmedData.birthDate || !trimmedData.email || !trimmedData.phoneNumber || !trimmedData.aboutYou) {
      return res.status(400).json({
        message: 'All fields are required.',
      });
    }

    try {
      const filePath = file ? path.resolve(uploadDir, file.filename) : '';
      console.log('File Path:', filePath);
      const fileExists = fs.existsSync(filePath);
      console.log('Does the file exist?', fileExists);

      if (!fileExists) {
        throw new Error('File does not exist at path: ' + filePath);
      }

      const info = await sendEmail(
        trimmedData.firstName,
        trimmedData.lastName,
        trimmedData.middleName,
        trimmedData.birthDate,
        trimmedData.email,
        trimmedData.phoneNumber,
        trimmedData.aboutYou,
        filePath
      );
      await sendCongratulatoryEmail(trimmedData.email);
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
  });
};

module.exports = applyJob;