import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    console.log("Receiving request...");

    // Parse the JSON payload from the request
    const payload = await req.json();

    const {
      firstName,
      lastName,
      email,
      contactNumber,
      budget,
      referral,
      description,
      nda,
    } = payload;

    // Configure the Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Access from .env // Your email address
        pass: process.env.EMAIL_PASS, // Access from .env // Your app-specific password
      },
    });

    console.log("Sending email...");

    // Send the email
    const mailResponse = await transporter.sendMail({
      from: `"Contact Form" <${email}>`, // Sender email
      to: "hasansit48@gmail.com", // Recipient email
      subject: "New Contact Form Submission",
      html: `
        <h1>Contact Form Submission</h1>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Contact Number:</strong> ${contactNumber}</p>
        <p><strong>Budget Size:</strong> ${budget}</p>
        <p><strong>How did you hear about us?</strong> ${referral}</p>
        <p><strong>Project Description:</strong> ${description}</p>
        <p><strong>NDA Required:</strong> ${nda ? "Yes" : "No"}</p>
      `,
    });

    // console.log("Email sent successfully:", mailResponse);

    // Respond with success
    return NextResponse.json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error in POST handler:", error);

    // Respond with an error
    return NextResponse.json(
      { error: "An error occurred while sending the email." },
      { status: 500 }
    );
  }
};
