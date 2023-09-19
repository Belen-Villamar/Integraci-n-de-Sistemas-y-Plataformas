const {Router} = require('express')
const Veterinario = require('./veterinario.controller');

const router = Router();

router.get('/veterinarios', Veterinario.getVeterinarios)
router.post('/veterinarios', Veterinario.newVeterinario)


module.exports = router