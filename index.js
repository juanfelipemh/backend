import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import ProductoRouter from './routes/productoRouter.js';
import bodyParser from 'body-parser';
import cors from 'cors'
import FacturasRouter from './routes/facturaRouter.js';
import UsuarioRouter from './routes/usuarioRouter.js';



// Configuración a variables de entorno
dotenv.config();


//Conexión con BD
mongoose.connect(process.env.MONGO).then( ()=>{
    console.log("Conectado a la base de datos");
}).catch((error) => {
    console.log(error.message);
})

const app = express();


// Middlewares
/*const dominiosPermitidos = [process.env.FRONTEND_URL];
const corsOptions = {
    origin: function(origin, callback){
        if(dominiosPermitidos.indexOf(origin) !== -1){
            // El origen del Request esta permitido
            callback(null, true);
        }else{
            callback(new Error('No permitido por CORS'));
        }
    }
};*/

//app.use(cors(corsOptions)) 
app.use(cors()) // Convierte la URL en una instrucción valida para axios

app.use(express.json()) // Convertir String en objeto literal JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

// Routes
// Creamos la ruta para los productos en la aplicación
app.use("/api/productos", ProductoRouter);
app.use("/api/facturas", FacturasRouter);
app.use("/api/usuarios", UsuarioRouter)


// Conexión al puerto servidor
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Conectado al puerto ${PORT}`);
    
})