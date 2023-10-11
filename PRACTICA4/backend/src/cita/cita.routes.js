const { Router } = require("express");
const { getCitas, newCita } = require("./cita.controller");

const router = Router();

router.get("/citas", getCitas);
router.post("/citas", newCita);

module.exports = router;
