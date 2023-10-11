const { Router } = require("express");
const { getProveedores, newProveedor } = require("./proveedor.controller");

const router = Router();

router.get("/proveedores", getProveedores);
router.get("/proveedor", newProveedor);

module.exports = router;
