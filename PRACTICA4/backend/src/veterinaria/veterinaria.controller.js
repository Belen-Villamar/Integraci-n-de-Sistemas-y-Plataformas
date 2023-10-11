const {
  getAllDocuments,
  insertNewDocument,
} = require("../../adapters/MongooseAdapter");
const { Veterinaria } = require("./veterinaria.model");

const getVeterinaria = async (req, res) => {
  try {
    const veterinaria = await getAllDocuments(Veterinaria);
    res.status(200).json(veterinaria);
  } catch (error) {
    console.error("Read error:", error);
    res.status(500).send("Error reading data");
  }
};

const newVeterinaria = async (req, res) => {
  const { nombre, direccion } = req.body;
  try {
    const data = await insertNewDocument(Veterinaria, {
      nombre,
      direccion,
    });
    res.status(200).json(data);
  } catch (error) {
    console.error("Read error:", error);
    res.status(500).send("Error inserting data");
  }
};

module.exports = {
  getVeterinaria,
  newVeterinaria,
};
