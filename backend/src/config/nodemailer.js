const nodemailer = require("nodemailer")
const dotenv = require("dotenv");

dotenv.config()
const config = () =>{
    return {
        host: process.env.SMTP_HOST,
        port: +process.env.MTP_PORT,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS
        }
    }
}

const transporter = nodemailer.createTransport(config())

module.exports = transporter;