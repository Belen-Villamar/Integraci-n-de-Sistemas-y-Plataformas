const { getAllDocuments, insertNewDocument } = require('../../adapters/MongoDBAdapter');

const getVeterinarios = async (req, res) => {
    try {
        const veterinarios = await getAllDocuments('veterinarios')
        res.json(veterinarios);
    } catch (error) {
        console.error('Read error:', error);
        res.status(500).send('Error reading data');
    }
}

const newVeterinario = async (req, res) => {
    const { id_veterinaria, nombre_veterinaria, nombre, apellido } = req.body
    try {
        const veterinario = await insertNewDocument('veterinarios', { id_veterinaria, nombre_veterinaria, nombre, apellido })
        res.json(veterinario);
    } catch (error) {
        console.error('Read error:', error);
        res.status(500).send('Error inserting data');
    }
}


module.exports = {
    getVeterinarios,
    newVeterinario
}