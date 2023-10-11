const { Router } = require("express");
const { getVentas, newVenta } = require("./venta.controller");

const router = Router();

router.get("/ventas", getVentas);
router.post("/ventas", newVenta);

module.exports = router;
