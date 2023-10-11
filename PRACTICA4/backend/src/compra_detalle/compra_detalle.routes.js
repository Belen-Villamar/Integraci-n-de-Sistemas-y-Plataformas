const { Router } = require("express");
const { getDetalleCompras, newDetalleCompras } = require("./compra_detalle.controller");

const router = Router();

router.get("/detalleCompras", getDetalleCompras);
router.post("/detalleCompras", newDetalleCompras);

module.exports = router;
