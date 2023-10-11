const { Router } = require("express");
const { getClientes, newCliente } = require("./cliente.controller");

const router = Router();

router.get("/clientes", getClientes);
router.post("/clientes", newCliente);

module.exports = router;
