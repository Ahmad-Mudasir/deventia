const nodemailer = require('nodemailer');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const reply = require('./replymessage')

// Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'uploads'); // Specify the upload directory
  },
  filename: (req, file, cb) => {
      const ext = path.extname(file.originalname); // Get the file extension
      const filename = `${Date.now()}${ext}`; // Use a timestamp to avoid name collisions
      cb(null, filename); // Set the file name
  }
});


const upload = multer({
  storage: storage,
});

// Configure nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'abdulmajid1m2@gmail.com',
    pass: 'cekpalvvmiqcxvje',
  },
});

async function sendEmail(
  firstName,
  lastName,
  middleName,
  birthDate,
  email,
  phoneNumber,
  aboutYou,
  filePath // Use filePath to include attachment
) {
  reply(email)
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

    // Add attachment only if filePath is provided
    if (filePath) {
      mailOptions.attachments = [
        {
          filename: path.basename(filePath), // Extract filename from the path
          path: filePath, // Attach the file from the path
        },
      ];
    }

    const info = await transporter.sendMail(mailOptions);

    console.log('Message sent: %s', info.messageId);
    return info;
  } catch (error) {
    throw new Error(`Error sending email: ${error.message}`);
  }
}

const applyJob = async (req, res) => {
  // Use multer to handle file upload
  upload.single('file')(req, res, async (err) => {
    if (err) {
      return res.status(500).json({
        message: 'Error uploading file',
        error: err.toString(),
      });
    }

    const { firstName, lastName, middleName, birthDate, email, phoneNumber, aboutYou } = req.body;
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
      const filePath = file ? path.resolve(__dirname, '..', 'uploads', file.filename) : '';

      console.log('File Path:', filePath);
      const fileExists = fs.existsSync(filePath);
      console.log('Does the file exist?', fileExists);

      if (filePath && !fileExists) {
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



// Export the function
module.exports = applyJob;
