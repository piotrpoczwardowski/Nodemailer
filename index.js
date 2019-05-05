const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const app =express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.post('/api/form', (req, res) => {
    console.log(req.body)
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'piotrpoczwardowski@gmail.com',
          pass: 'k792675c'
        }
      });
      
      var mailOptions = {
        from: 'piotrpoczwardowski@gmail',
        to: 'piotrpoczwardowski@gmail',
        subject: 'Siemka',
        text: `${req.body.msg}`
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`server listen on ${PORT}`)
})

