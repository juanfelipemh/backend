import express from 'express'
import { agregarFacturasCtrl, obtenerFacturasCtrl } from '../controllers/facturaController.js';

const FacturasRouter = express.Router()

FacturasRouter.get("/obtenerFacturas", obtenerFacturasCtrl)
FacturasRouter.post("/agregarFacturas", agregarFacturasCtrl);


export default FacturasRouter;