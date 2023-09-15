 import nodemailer from 'nodemailer';

 export default async function CONTACTAPI(req, res) {
const {name, email, message} = req.body;
const data = {
    name,email,message}

    const user=process.env.EMAIL;
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: user,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    try{
const mail = await transporter.sendMail({
  from: user,
  to: "semesterproject11@gmail.com",
  replyTo: email,
  subject: `New contact form submission from ${name}`,
  html: `<p>You have a new contact form submission from ${name}</p> <br><p> Email ${email}</p> <br> <p>Person has raised the following query:</p><br><p> ${message}</p>`,
});
console.log("Message sent successfully", mail.messageId);
return res.status(200).json({ message: "success" });
    }catch(error){
        console.log(error)
        res.status(500).json({message: 'Internal Server Error'})
    }

 }