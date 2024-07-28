const nodemailer = require("nodemailer");

// Configure the transporter with your Gmail credentials
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    service: "gmail",
    auth: {
        user: "abdulmajid1m2@gmail.com",
        pass: "cekpalvvmiqcxvje",
    },
});

// Function to send an email
async function sendEmail(senderEmail, message, subject) {
    try {
        const info = await transporter.sendMail({
            from: "abdulmajid1m2@gmail.com",
            to: 'farmanali.21mdswe186@gmail.com',
            subject: subject,
            text: message,
            html: `<p>${message}</p>`,
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
