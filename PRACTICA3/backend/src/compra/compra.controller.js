const MongoDBAdapter = require('../../adapters/MongoDBAdapter');
const { getAllDocuments, insertNewDocument } = require('../../adapters/MongoDBAdapter');


const getCompras = async (req, res) => {
    try {
        const compras = await MongoDBAdapter.getAllDocuments('compras')
        res.status(200).json(compras);
    } catch (error) {
        console.error('Read error:', error);
        res.status(500).send('Error reading data');
    }
}

const newCompra = async (req, res) => {
    const {id_veterinaria, id_producto, id_proveedor, fecha_compra} = req.body
    try {
        const compra = await insertNewDocument('compras', {id_veterinaria, id_producto, id_proveedor, fecha_compra})
        res.status(200).json(compra);
    } catch (error) {
        console.error('Read error:', error);
        res.status(500).send('Error inserting data');
    }
}



module.exports = {
    getCompras,
    newCompra
}