const {Router} = require('express')
const Cliente = require('./cliente.controller');

const router = Router();

router.get('/clientes', Cliente.getClientes)
router.post('/clientes', Cliente.newCliente)

module.exports = router