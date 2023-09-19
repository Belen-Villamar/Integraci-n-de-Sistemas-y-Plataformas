const MongoDBAdapter = require('../../adapters/MongoDBAdapter');
const { getAllDocuments, insertNewDocument } = require('../../adapters/MongoDBAdapter');


const getVentas = async (req, res) => {
    try {
        const ventas = await MongoDBAdapter.getAllDocuments('ventas')
        res.status(200).json(ventas);
    } catch (error) {
        console.error('Read error:', error);
        res.status(500).send('Error reading data');
    }
}

const newVenta = async (req, res) => {
    const { id_veterinaria, id_cliente, id_producto, id_venta_detalle, fecha_venta, descripcion } = req.body
    try {
        const venta = await insertNewDocument('ventas', { id_veterinaria, id_cliente, id_producto, id_venta_detalle, fecha_venta, descripcion })
        res.status(200).json(venta);
    } catch (error) {
        console.error('Read error:', error);
        res.status(500).send('Error inserting data');
    }
}



module.exports = {
    getVentas,
    newVenta
}