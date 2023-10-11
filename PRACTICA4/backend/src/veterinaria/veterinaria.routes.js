const { Router } = require("express");
const { getVeterinaria, newVeterinaria } = require("./veterinaria.controller");

const router = Router();

router.get("/veterinaria", getVeterinaria);
router.post("/veterinaria", newVeterinaria);

module.exports = router;
