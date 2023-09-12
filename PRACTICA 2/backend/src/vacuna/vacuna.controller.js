const { getAllDocuments, insertNewDocument } = require('../../adapters/MongoDBAdapter')

const getVacunas = async (req, res) => {
    try {
        const vacunas = await getAllDocuments('vacunas');
        res.json(vacunas);
    } catch (error) {
        console.error('Read error:', error);
        res.status(500).send('Error reading data');
    }
}

const newVacuna = async (req, res) => {
    const {id_mascota, id_veterinario, id_producto, fecha_aplicacion, dosis} = req.body
    try {
        const data = await insertNewDocument('vacunas', {id_mascota, id_veterinario, id_producto, fecha_aplicacion, dosis})
        res.json(data);
    } catch (error) {
        console.error('Read error:', error);
        res.status(500).send('Error inserting data');
    }
}



module.exports = {
    getVacunas,
    newVacuna
}