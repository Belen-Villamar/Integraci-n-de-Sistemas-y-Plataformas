const { Router } = require("express");
const { getVeterinarios, newVeterinario } = require("./veterinario.controller");

const router = Router();

router.get("/veterinarios", getVeterinarios);
router.post("/veterinarios", newVeterinario);

module.exports = router;
