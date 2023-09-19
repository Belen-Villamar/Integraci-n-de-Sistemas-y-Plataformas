const {Router} = require('express')
const Producto = require('./producto.controller');

const router = Router();

router.get('/productos', Producto.getProductos)
router.post('/productos', Producto.newProducto)

module.exports = router