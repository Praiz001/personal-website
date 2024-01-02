import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  const { name, email, title, message } = await request.json();

  const user = process.env.NEXT_PUBLIC_EMAIL;
  const passworrd = process.env.NEXT_PUBLIC_PASS;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    // port: 587,
    secure: true,
    auth: {
      user: user,
      pass: process.env.NEXT_PUBLIC_PASS,
    },
  });


  const mailOption = {
    from: user,
    to: user,
    replyTo: email,
    subject: `Contact form submission from ${name}`,
    html: `
        <h1>${title}</h1>
        <p>Hello my name is ${name}.</p>
        <p>My email is ${email}.</p>
        <p>${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOption);
    return NextResponse.json({ message: "Email sent succesfully." }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Your message was not sent. Please try again.",
      },
      { status: 500 }
    );
  }
}
