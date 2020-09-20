const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = async (email, name) =>{
    sgMail.send({
        to:email,
        from:'lartumraksap11@live.com',
        subject:'welcome to task manager',
        text:`Hello ${name} welcome to my task manager app.`
    })
}

const sendDeleteEmail = (email, name) =>{
    sgMail.send({
        to:email,
        from:'lartumraksap11@live.com',
        subject:'Account Deleted',
        text:`Hello ${name} Thank you for staying with us, would you give us a feedback on why you deleted your account.`
    })
}


module.exports = {
    sendWelcomeEmail,
    sendDeleteEmail
}