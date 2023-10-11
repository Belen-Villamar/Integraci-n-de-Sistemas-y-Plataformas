const { Router } = require("express");
const { getProductos, newProducto } = require("./producto.controller");

const router = Router();

router.get("/productos", getProductos);
router.post("/productos", newProducto);

module.exports = router;
