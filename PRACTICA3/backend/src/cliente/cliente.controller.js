const MongoDBAdapter = require('../../adapters/MongoDBAdapter');
const { getAllDocuments, insertNewDocument } = require('../../adapters/MongoDBAdapter');

const getClientes = async (req, res) => {
    try {
        const clientes = await MongoDBAdapter.getAllDocuments('clientes');
        res.status(200).json(clientes);
    } catch (error) {
        console.error('Read error:', error);
        res.status(500).send('Error reading data');
    }
}

const newCliente = async (req, res) => {
    const {nombre, apellido, genero, direccion, telefono, fecha_registro, ultima_visita, antiguedad, ci, num_mascotas} = req.body
    try {
        const data = await insertNewDocument('clientes', {nombre, apellido, genero, direccion, telefono, fecha_registro, ultima_visita, antiguedad, ci, num_mascotas})
        res.status(200).json(data);
    } catch (error) {
        console.error('Read error:', error);
        res.status(500).send('Error inserting data');
    }
}



module.exports = {
    getClientes,
    newCliente
}