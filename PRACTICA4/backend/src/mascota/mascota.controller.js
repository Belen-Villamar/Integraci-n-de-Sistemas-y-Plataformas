const { getAllDocuments, insertNewDocument } = require("../../adapters/MongooseAdapter");
const { Mascota } = require("./mascota.model");

const getMascotas = async (req, res) => {
	try {
		const mascotas = await getAllDocuments(Mascota);
		res.status(200).json(mascotas);
	} catch (error) {
		console.error("Read error:", error);
		res.status(500).send("Error reading data");
	}
};

const newMascota = async (req, res) => {
	const {
		id_cliente,
		id_tipo_mascota,
		id_habito,
		nombre_mascota,
		fecha_nacimiento,
		genero,
		color,
		esterilizacion,
	} = req.body;
	try {
		const mascota = await insertNewDocument(Mascota, {
			id_cliente,
			id_tipo_mascota,
			id_habito,
			nombre_mascota,
			fecha_nacimiento,
			genero,
			color,
			esterilizacion,
		});
		res.status(200).json(mascota);
	} catch (error) {
		console.error("Read error:", error);
		res.status(500).send("Error inserting data");
	}
};

module.exports = {
	getMascotas,
	newMascota,
};
