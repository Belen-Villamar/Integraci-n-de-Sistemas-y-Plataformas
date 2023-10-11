const {
  getAllDocuments,
  insertNewDocument,
} = require("../../adapters/MongooseAdapter");
const { HabitoMascota } = require("./habito_mascota.model");

const getHabitosMascota = async (req, res) => {
  try {
    const habitos_mascota = await getAllDocuments(HabitoMascota);
    res.status(200).json(habitos_mascota);
  } catch (error) {
    console.error("Read error:", error);
    res.status(500).send("Error reading data");
  }
};

const newHabitoMascota = async (req, res) => {
  const { descripcion } = req.body;
  try {
    const habito_mascota = await insertNewDocument(HabitoMascota, {
      descripcion,
    });
    res.status(200).json(habito_mascota);
  } catch (error) {
    console.error("Read error:", error);
    res.status(500).send("Error inserting data");
  }
};

module.exports = {
  getHabitosMascota,
  newHabitoMascota,
};
