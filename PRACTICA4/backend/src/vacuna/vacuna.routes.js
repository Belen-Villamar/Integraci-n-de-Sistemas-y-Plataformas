const { Router } = require("express");
const { getVacunas, newVacuna } = require("./vacuna.controller");

const router = Router();

router.get("/vacunas", getVacunas);
router.post("/vacunas", newVacuna);

module.exports = router;
