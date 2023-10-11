const { getAllDocuments, insertNewDocument } = require("../../adapters/MongooseAdapter");
const { Cliente } = require("./cliente.model");

const getClientes = async (req, res) => {
	try {
		const clientes = await getAllDocuments(Cliente);
		res.status(200).json(clientes);
	} catch (error) {
		console.error("Read error:", error);
		res.status(500).send("Error reading data");
	}
};

const newCliente = async (req, res) => {
	const {
		nombre,
		apellido,
		genero,
		direccion,
		telefono,
		fecha_registro,
		ultima_visita,
		antiguedad,
		ci,
		num_mascotas,
	} = req.body;
	try {
		const data = await insertNewDocument(Cliente, {
			nombre,
			apellido,
			genero,
			direccion,
			telefono,
			fecha_registro,
			ultima_visita,
			antiguedad,
			ci,
			num_mascotas,
		});
		res.status(200).json(data);
	} catch (error) {
		console.error("Read error:", error);
		res.status(500).send("Error inserting data");
	}
};

module.exports = {
	getClientes,
	newCliente,
};
