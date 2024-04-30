import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import { isValidEmail } from "@/utilities/helpers";
import { NextRequest, NextResponse } from "next/server";

interface ContactFormData {
  email: string;
  message: string;
}

export async function POST(request: NextRequest, response: NextResponse) {
  const { email, message } = await request.json();

  if (!email || !message) {
    return new NextResponse(JSON.stringify({ message: "Method not allowed" }), {
      status: 405,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  if (!isValidEmail(email)) {
    return new NextResponse(
      JSON.stringify({ message: "Invalid email address" }),
      {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: "Personal Website - New Contact Form Submission",
    text: `
      Email: ${email}
      Message: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new NextResponse(
      JSON.stringify({ message: "Email sent successfully" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new NextResponse(
      JSON.stringify({ message: "Error sending email" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
