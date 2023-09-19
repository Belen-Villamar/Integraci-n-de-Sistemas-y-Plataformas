const MongoDBAdapter = require('../../adapters/MongoDBAdapter');
const { getAllDocuments, insertNewDocument } = require('../../adapters/MongoDBAdapter');


const getProductos = async (req, res) => {
    try {
        const productos = await MongoDBAdapter.getAllDocuments('productos')
        res.status(200).json(productos);
    } catch (error) {
        console.error('Read error:', error);
        res.status(500).send('Error reading data');
    }
}

const newProducto = async (req, res) => {
    const { id_tipo_producto, nombre } = req.body
    try {
        const producto = await insertNewDocument('productos', { id_tipo_producto, nombre })
        res.status(200).json(producto);
    } catch (error) {
        console.error('Read error:', error);
        res.status(500).send('Error inserting data');
    }
}


module.exports = {
    getProductos,
    newProducto
}