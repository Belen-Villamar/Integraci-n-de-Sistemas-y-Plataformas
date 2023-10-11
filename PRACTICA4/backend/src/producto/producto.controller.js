const { getAllDocuments, insertNewDocument } = require("../../adapters/MongooseAdapter");
const { Producto } = require("./producto.model");

const getProductos = async (req, res) => {
	try {
		const productos = await getAllDocuments(Producto);
		res.status(200).json(productos);
	} catch (error) {
		console.error("Read error:", error);
		res.status(500).send("Error reading data");
	}
};

const newProducto = async (req, res) => {
	const { id_tipo_producto, nombre } = req.body;
	try {
		const producto = await insertNewDocument(Producto, { id_tipo_producto, nombre });
		res.status(200).json(producto);
	} catch (error) {
		console.error("Read error:", error);
		res.status(500).send("Error inserting data");
	}
};

module.exports = {
	getProductos,
	newProducto,
};
