const {Router} = require('express')
const Compra = require('./compra.controller');

const router = Router();

router.get('/compras', Compra.getCompras)
router.post('/compras', Compra.newCompra)


module.exports = router