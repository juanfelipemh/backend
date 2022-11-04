import nodemailer from 'nodemailer';
import dotenv from 'dotenv'

dotenv.config()

const emailRegistro = async (datos) => {
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
      from: "AEC - Administrador de ECommerce Articulos",
      to: email,
      subject: 'Comprueba tu cuenta en AEC',
      text: 'Comprueba tu cuenta en AEC',
      html: `<p>Hola: ${nombre}, comprueba tu cuenta en AEC.</p>
               <p> Tu cuenta ya esta lista, solo debes comprobarla en el siguiente enlace:
               
               <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Comprobar Cuenta</a></p>
               <p>Si tu no creaste esta cuenta, puedes ignorar este mensaje</p>
               `
    });

    //console.log("Mensaje enviado: %s", info.messageId);

};


export default emailRegistro;