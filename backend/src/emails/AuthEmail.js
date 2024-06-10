const transporter = require("../config/nodemailer")

class AuthEmail {
    static sendConfirmationEmail = async(user) => {
        const info = await transporter.sendMail({
            from: "<admin@gmail.com>",
            to: user.email,
            subject: "Confirma tu cuenta",
            text: "Confirma tu cuenta",
            html: `<p>fgdfgdf</p>`
        })
        console.log("Mensaje enviado", info.messageId)
    }
}

module.exports = AuthEmail