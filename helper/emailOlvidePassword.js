import nodemailer from "nodemailer";
import dotenv from 'dotenv'

dotenv.config()

const emailOlvidePassword = async (datos) => {
  const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "f95c089b4f3aef",
      pass: "cd46a35389ffd3"
    }
  });

  const { email, nombre, token } = datos;
  // Enviar el email
  const info = await transport.sendMail({
    from: "carritocompras@example",
    to: email,
    subject: "Reestablece tu password",
    text: "Reestablece tu password",
    html: `<p>Hola: ${nombre}, has solicitado reestablecer tu password.</p>
               <p> Sigue el siguiente enlace para generar un nuevo password:
               
               <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Reestablecer password</a></p>
               <p>Si tu no creaste esta cuenta, puedes ignorar este mensaje</p>
               `,
  });

  // console.log("Mensaje enviado: %s", info.messageId);
};

export default emailOlvidePassword;
