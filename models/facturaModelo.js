import mongoose from "mongoose";

// Creamos modelo para la base de datos
const facturaSchema = mongoose.Schema({

    valorTotal:{
        type: Number,
        required: true
    },
    items:{
        type: Array,
        required: true
    }
},
{
    timestamps: true
})

// Exportamos el modelo para ser usado en otras dependencias
const Factura = mongoose.model("Factura", facturaSchema);
export default Factura;