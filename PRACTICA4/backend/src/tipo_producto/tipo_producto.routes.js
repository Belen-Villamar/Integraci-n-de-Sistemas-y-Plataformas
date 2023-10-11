const { Router } = require("express");
const { getTipoProducto, newTipoProducto } = require("./tipo_producto.controller");

const router = Router();

router.get("/tipoProducto", getTipoProducto);
router.post("/tipoProducto", newTipoProducto);

module.exports = router;
