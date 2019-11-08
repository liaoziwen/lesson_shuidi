const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service:'qq',   //腾讯
    port: 465,
    secureConnnection: true,
    auth: {
        user: '786254558@qq.com',
        pass: 'ruwtcgsgquvabffe',
    }
})


let mailOptions = {
    from: "光棍节前的呐喊<786254558@qq.com>",
    to: '1239941131@qq.com',
    subjiect: '双十一买什么',
    html: '<b>淘宝京东拼多多</b>',
}

transporter.sendMail(mailOptions,(errorn,info)=>{
    if(error){
        return console,log(error);
    }
    console.log('Message send: %s',info.messageID);
})

