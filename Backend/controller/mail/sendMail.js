const nodemailer = require('nodemailer');

// Configure the transporter with your Gmail credentials
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'abdulmajid1m2@gmail.com', // Use environment variables for security
    pass: 'cekpalvvmiqcxvje', // Use environment variables for security
  },
});

// Function to send an email
async function sendEmail(senderEmail, message, subject, phoneNumber, fullName) {
  try {
    const info = await transporter.sendMail({
      from: 'abdulmajid1m2@gmail.com', // Use the sender's email
      to: 'abdulmajid1m2@gmail.com', // Replace with the recipient's email
      subject: subject,
      text: message,
      html: `
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${senderEmail}</p>
        <p><strong>Phone Number:</strong> ${phoneNumber}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    console.log('Message sent: %s', info.messageId);
    return info;
  } catch (error) {
    throw new Error(`Error sending email: ${error.message}`);
  }
}

// Express route handler to send an email
const sendMail = async (req, res) => {
  const { senderEmail, message, subject, phoneNumber, fullName } = req.body;

  if (!senderEmail || !message || !subject || !phoneNumber || !fullName) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    const info = await sendEmail(
      senderEmail,
      message,
      subject,
      phoneNumber,
      fullName
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
};

module.exports = sendMail;
