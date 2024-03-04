import type { APIRoute } from "astro";
import nodemailer from "nodemailer";

const OUR_EMAIL = import.meta.env.PUBLIC_OUR_EMAIL;
const OUR_PASSWORD = import.meta.env.GOOGLE_APP_PASSWORD;

export const POST: APIRoute = async ({ request }) => {
  const { name, email, description } = await request.json();

  if (!name || !email || !description) {
    return new Response(
      JSON.stringify({ message: "Puutteelliset yhteystiedot." }),
      { status: 400 },
    );
  }

  if (import.meta.env.DEV) {
    try {
      return new Response(JSON.stringify({ message: "Viesti lähetetty!" }), {
        status: 200,
      });
    } catch (error) {
      return new Response(
        JSON.stringify({ message: "Viestin lähetys epäonnistui." }),
        {
          status: 500,
        },
      );
    }
  }

  // Set up Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "gmail", // or your preferred email service
    auth: {
      user: OUR_EMAIL, // replace with your email
      pass: OUR_PASSWORD, // replace with your password or app-specific password
    },
  });

  const mailOptions = {
    from: email, // sender address
    to: OUR_EMAIL, // list of receivers
    subject: `New message from ${name}`, // Subject line
    text: `Name: ${name}\nEmail: ${email}\nDescription: ${description}`, // plain text body
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: "Viesti lähetetty!" }), {
      status: 200,
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Virhe viestiä lähetettäessä." }),
      {
        status: 500,
      },
    );
  }
};
