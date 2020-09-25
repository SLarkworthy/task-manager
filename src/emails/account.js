const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)


const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'sarah.larkworthy@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'sarah.larkworthy@gmail.com',
        subject: 'Sorry you left!',
        text: `Goodbye, ${name}. We'll miss you.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}