const { Router } = require("express");
const { getTipoMascota, newTipoMascota } = require("./tipo_mascota.controller");

const router = Router();

router.get("/tipoMascota", getTipoMascota);
router.post("/tipoMascota", newTipoMascota);

module.exports = router;
