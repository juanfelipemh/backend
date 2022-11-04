import mongoose from "mongoose";

// Creamos modelo para la base de datos
const productoSchema = mongoose.Schema({

    nombre:{
        type: String,
        required: true
    },
    precio:{
        type: Number,
        required: true
    },
    imagen:{
        type: String,
        required: true
    },
    stock:{
        type: Number,
        required: true
    }
},
{
    timestamps: true
})

// Exportamos el modelo para ser usado en otras dependencias
const Producto = mongoose.model("Producto", productoSchema);
export default Producto;