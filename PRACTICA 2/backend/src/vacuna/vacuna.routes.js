const {Router} = require('express')
const Vacunas = require('./vacuna.controller');

const router = Router();

router.get('/vacunas', Vacunas.getVacunas)
router.post('/vacunas', Vacunas.newVacuna)


module.exports = router