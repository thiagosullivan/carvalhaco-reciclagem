// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default (req, res) => {
//   console.log(req.body)
//   res.status(200).json(req.body)
// }

// require('dotenv').config()
const nodemailer = require('nodemailer');

export default function sendEmail(req, res) {
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
      user: 'carvalhacocontato@gmail.com',
      pass: 'carva2021'
    }
  })

  transporter.sendMail({
    from: `"Formulário do Site 📑" ${process.env.USERMAIL}`,
    to: process.env.USERMAIL,
    replyTo: req.body.email,
    subject: "Formulário de Contato",
    text: req.body.message,
    html: `<b>Nome:</b> ${req.body.name}<br /><br />
    <b>Telefone:</b> ${req.body.phone}<br /><br />
    <b>E-mail:</b> ${req.body.email}<br /><br />
    <b>Empresa:</b> ${req.body.company}<br /><br />
    <b>Menssagem:</b><br />${req.body.message}`,
  }).then((response) => {
    res.send(response)
  })
  .catch((error) => {
    res.send(error)
  })
}
