const { Router } = require("express");
const { getMascotas, newMascota } = require("./mascota.controller");

const router = Router();

router.get("/mascotas", getMascotas);
router.get("/mascotas", newMascota);

module.exports = router;
