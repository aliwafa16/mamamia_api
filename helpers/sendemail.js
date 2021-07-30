const nodemailer = require('nodemailer')


exports.kirimEmail = dataemail => {
    let transporter = nodemailer.createTransport({
        host : "smtp.gmail.com",
        port : 587,
        secure : false,
        requireTLS : true,
        auth : {
            user : "mamamiaplanner@gmail.com",
            pass : "nppyrslrhcsijorq"
        },

    });

        transporter.sendMail(dataemail)
        .then(info => console.log(`email terkirim : ${info.messageId}`))
        .catch(err => console.log(`terjadi kesalahan : ${err}`))
    
}