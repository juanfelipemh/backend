import Factura from "../models/facturaModelo.js";


export const obtenerFacturasCtrl = async (req, res) => {
    try {
        const facturas = await Factura.find();
        res.send(facturas) 
    } catch (error) {
        console.log(error);
    }
}

export const agregarFacturasCtrl = async (req, res) => {
    try {
        const nuevaFactura = new Factura(req.body);
        await nuevaFactura.save()
        res.send("Factura registrada")
    } catch (error) {
        console.log(error);
    }
}
