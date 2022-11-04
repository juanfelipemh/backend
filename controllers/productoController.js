import Producto from "../models/productoModelo.js";


// Consulta los productos 
export const consultarProductosCtrl = async (req, res) => {
    try {
        const Productos = await Producto.find()
        res.status(200).send(Productos)        
    } catch (error) {
        console.log(error);
    }
};

export const consultarUnProductoCtrl = async (req, res) => {
    try {
        const unProducto = await Producto.findById(req.params.
            _id)
        res.status(200).send(unProducto)
    } catch (error) {
        console.log(error);        
    }
}

// Agregar productos
export const agregarProductoCtrl = async (req, res) => {
    try {
        const nuevoProducto = new Producto(req.body);
        await nuevoProducto.save()
        res.status(200).send("Producto creado satisfactoriamente")
    
    } catch (error) {
        console.log(error);
    }
}

// Modificar productos
export const modificarProductoCtrl = async (req, res) => {
    try {
        const { nombre, precio, imagen, stock } = req.body
        await Producto.findByIdAndUpdate(req.params.id, {nombre, precio, imagen, stock})        
        res.status(204).send("Producto modificado satisfactoriamente")

    } catch (error) {
        res.status(400).send(error);
        console.log(error);
    }
}

// Eliminar productos
export const eliminarProductoCtrl = async (req, res) => {
    try {
        const { id } = req.params
            const user = await Producto.findByIdAndDelete({_id: id})

        if(user){
            res.status(200).send("Producto eliminado satisfactoriamente")
        } else{
            res.status(200).send("Producto no encontrado")
        }       

    } catch (error)  {
        res.status(400).send(error)
        console.log(error);
    }
}