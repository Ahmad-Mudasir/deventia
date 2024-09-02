const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "abdulmajid1m2@gmail.com",
    pass: "cekpalvvmiqcxvje",
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function reply(req,res) {

    const {senderMail}=req.body

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"DevEntia" <abdulmajid1m2@gmail.com>', // sender address
    to: senderMail, // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

exports.module = reply;