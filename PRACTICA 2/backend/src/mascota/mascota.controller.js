const { getAllDocuments, insertNewDocument } = require('../../adapters/MongoDBAdapter');


const getMascotas = async (req, res) => {
    try {
        const mascotas = await getAllDocuments('mascotas')
        res.json(mascotas);
    } catch (error) {
        console.error('Read error:', error);
        res.status(500).send('Error reading data');
    }
}

const newMascota = async (req, res) => {
    const { id_cliente, id_tipo_mascota, id_habito, nombre_mascota, fecha_nacimiento, genero, color, esterilizacion } = req.body
    try {
        const mascota = await insertNewDocument('mascotas', {id_cliente, id_tipo_mascota, id_habito, nombre_mascota, fecha_nacimiento, genero, color, esterilizacion })
        res.json(mascota);
    } catch (error) {
        console.error('Read error:', error);
        res.status(500).send('Error inserting data');
    }
}


module.exports = {
    getMascotas,
    newMascota
}