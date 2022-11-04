import express from 'express'
import { actualizarUsuario, auntenticar, comprobarToken, confirmar, nuevoPassword, olvidePassword, perfil, registrar, usuarioRegistrados } from '../controllers/usuarioController.js';


// middleware para validar el token
import checkAuth from '../middleware/authMiddleware.js';

const UsuarioRouter = express.Router();  

// Rutas Publicas
UsuarioRouter.post('/', registrar );
UsuarioRouter.get('/confirmar/:token', confirmar);
UsuarioRouter.post('/login', auntenticar);
UsuarioRouter.post('/olvide-password', olvidePassword);
UsuarioRouter.get('/olvide-password:token', comprobarToken);
UsuarioRouter.get('/lista-usuarios', usuarioRegistrados);
UsuarioRouter.route('/olvide-password/:token').get(comprobarToken).post(nuevoPassword); 


// Rutas Protegidas atraves del middleware checkAuth
// Identificamos el usuario y se identifica para mostrale los datos o funcionalidades que le corresponden.
UsuarioRouter.get('/perfil', checkAuth , perfil);
UsuarioRouter.put('/:id', checkAuth, actualizarUsuario);


export default UsuarioRouter;