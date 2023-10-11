const { Router } = require("express");
const { getHabitosMascota, newHabitoMascota } = require("./habito_mascota.controller");

const router = Router();

router.get("/habitosMascota", getHabitosMascota);
router.post("/habitosMascota", newHabitoMascota);

module.exports = router;
