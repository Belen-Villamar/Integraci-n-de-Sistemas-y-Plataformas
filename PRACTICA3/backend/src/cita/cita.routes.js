const {Router} = require('express')
const Cita = require('./cita.controller');

const router = Router();

router.get('/citas', Cita.getCitas)
router.post('/citas', Cita.newCita);

module.exports = router