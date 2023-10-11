const { Router } = require("express");
const { getCompras, newCompra } = require("./compra.controller");

const router = Router();

router.get("/compras", getCompras);
router.post("/compras", newCompra);

module.exports = router;
