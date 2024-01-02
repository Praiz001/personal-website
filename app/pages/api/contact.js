import nodemailer from "nodemailer";

export async function contactAPI(res, req) {
  const { name, email, title, message } = req.body;

  const data = { name, email, title, message };
  const user = process.env.REACT_APP_USER;


  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: true,
    auth: {
      user: user,
      pass: process.env.REACT_APP_PASS,
    },
  });

  try {

    return res.status(200).json({ message: "success" });
  } catch (error) {
    console.log('error', error)

    res.status(500).json({ message: "Your message was not sent because something went wrong" });
  }
}
