const { Router } = require("express");
const { getVentaDetalle, newVentaDetalle } = require("./venta_detalle.controller");

const router = Router();

router.get("/ventaDetalle", getVentaDetalle);
router.post("/ventaDetalle", newVentaDetalle);

module.exports = router;
