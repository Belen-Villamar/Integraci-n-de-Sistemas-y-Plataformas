const { getAllDocuments, insertNewDocument } = require("../../adapters/MongooseAdapter");
const { TipoMascota } = require("./tipo_mascota.model");

const getTipoMascota = async (req, res) => {
	try {
		const tiposMascota = await getAllDocuments(TipoMascota);
		res.status(200).json(tiposMascota);
	} catch (error) {
		console.error("Read error:", error);
		res.status(500).send("Error reading data");
	}
};

const newTipoMascota = async (req, res) => {
	const { descripcion } = req.body;
	try {
		const tipoMascota = await insertNewDocument(TipoMascota, { descripcion });
		res.status(200).json(tipoMascota);
	} catch (error) {
		console.error("Read error:", error);
		res.status(500).send("Error inserting data");
	}
};

module.exports = {
	getTipoMascota,
	newTipoMascota,
};
