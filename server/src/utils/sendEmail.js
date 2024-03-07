const nodemailer = require("nodemailer");

const sendOtpEmail = async (email, subject, otp) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.MAILER_SERVER,
      port: process.env.MAILER_PORT,
      secure: false, // Use `true` for port 465, `false` for all other ports
      secureConnection: false,
      auth: {
        user: process.env.MAILER_USER,
        pass: process.env.MAILER_PASSWORD,
      },
      tls: {
        rejectUnAuthorized: true,
      },
    });

    const info = await transporter.sendMail({
      from: `"NovaBotz 👻" <${process.env.MAILER_USER}>`,
      to: email,
      subject: subject,
      html: `<b>OTP for your NovaBotz platform verification is : ${otp}</b>`,
    });
    // console.log(info);
    return info;
  } catch (error) {
    console.log("Error occurred while sending email: ", error);
    throw error;
  }
};

module.exports = { sendOtpEmail };
