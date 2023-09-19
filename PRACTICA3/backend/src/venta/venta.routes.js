const {Router} = require('express')
const Venta = require('./venta.controller');

const router = Router();

router.get('/ventas', Venta.getVentas)
router.post('/ventas', Venta.newVenta)

module.exports = router