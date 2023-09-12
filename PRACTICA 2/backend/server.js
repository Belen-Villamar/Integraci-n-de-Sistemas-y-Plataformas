const express = require('express');
const cors = require('cors')
require('dotenv').config();
const app = express();
const rutasCitas = require('./src/cita/cita.routes')
const rutasClientes = require('./src/clientes/cliente.routes')
const rutasCompras = require('./src/compra/compra.routes')
const rutasMascotas = require('./src/mascota/mascota.routes')
const rutasProductos = require('./src/producto/producto.routes')
const rutasVacunas = require('./src/vacuna/vacuna.routes')
const rutasVentas = require('./src/venta/venta.routes')
const rutasVeterinario = require('./src/veterinario/veterinario.routes')

app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
    res.status(200).json({message: "Hello from my-express-app!"});
});
app.use(rutasCitas)
app.use(rutasClientes)
app.use(rutasCompras)
app.use(rutasMascotas)
app.use(rutasProductos)
app.use(rutasVentas)
app.use(rutasVacunas)
app.use(rutasVeterinario)

const PORT = 80;

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});
