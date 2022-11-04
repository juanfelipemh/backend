import express from 'express'
import { agregarProductoCtrl, consultarProductosCtrl, consultarUnProductoCtrl, eliminarProductoCtrl, modificarProductoCtrl } from '../controllers/productoController.js';

// Acá se genera las rutas de los controladores
const ProductoRouter = express.Router();

ProductoRouter.post("/agregarProducto", agregarProductoCtrl);
ProductoRouter.get("/consultarProductos", consultarProductosCtrl);
ProductoRouter.put("/modificarProducto/:id", modificarProductoCtrl);
ProductoRouter.delete("/eliminarProducto/:id", eliminarProductoCtrl)
ProductoRouter.get("/consultarUnProducto/:id", consultarUnProductoCtrl)


export default ProductoRouter;