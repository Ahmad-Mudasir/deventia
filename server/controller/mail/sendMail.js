const nodemailer = require("nodemailer");

// Configure the transporter with your Gmail credentials
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // Use true for port 465, false for all other ports
    auth: {
        user: "abdulmajid1m2@gmail.com", // Replace with your email
        pass: "cekpalvvmiqcxvje", // Replace with your app password
    },
});

// Function to send an email
async function sendEmail(senderEmail, message,subject) {
    try {
        const info = await transporter.sendMail({
            from: {
                name: 'User',
                address: senderEmail, // Dynamic sender email
            },
            to: 'abdulmajid1m2@gmail.com', // Fixed recipient email
            subject: subject, // Subject line
            text: message, // Plain text body
            html: `<p>${message}</p>`, // HTML body
        });

        console.log("Message sent: %s", info.messageId);
        return info;
    } catch (error) {
        throw new Error(`Error sending email: ${error.message}`);
    }
}

// Express route handler to send an email
const sendMail = async (req, res) => {
    const { senderEmail, message, subject } = req.body; // Extract sender email and message from request body

    if (!senderEmail || !message || !subject) {
        return res.status(400).json({ message: "Sender email and message are required." });
    }

    try {
        const info = await sendEmail(senderEmail, message, subject);
        res.status(200).json({ message: "Mail has been sent successfully", messageId: info.messageId });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ message: "Error sending email", error: error.toString() });
    }
};

module.exports = sendMail;
