const { getAllDocuments, insertNewDocument } = require('../../adapters/MongoDBAdapter');


const getCitas = async (req, res) => {
    try {
        const citas = await getAllDocuments('citas');
        res.json(citas);
    } catch (error) {
        console.error('Read error:', error);
        res.status(500).send('Error reading data');
    }
}

const newCita = async (req, res) => {
    const { id_veterinario, id_cliente, nombre_cliente, fecha_programada } = req.body
    try {
        const data = await insertNewDocument('citas', { id_veterinario, id_cliente, nombre_cliente, fecha_programada })
        res.json(data);
    } catch (error) {
        console.error('Read error:', error);
        res.status(500).send('Error inserting data');
    }
}



module.exports = {
    getCitas,
    newCita
}