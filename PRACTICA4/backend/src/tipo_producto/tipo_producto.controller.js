const {
  getAllDocuments,
  insertNewDocument,
} = require("../../adapters/MongooseAdapter");
const { TipoProducto } = require("./tipo_producto.model");

const getTipoProducto = async (req, res) => {
  try {
    const tipo_producto = await getAllDocuments(TipoProducto);
    res.status(200).json(tipo_producto);
  } catch (error) {
    console.error("Read error:", error);
    res.status(500).send("Error reading data");
  }
};

const newTipoProducto = async (req, res) => {
  const { nombre, detalle } = req.body;
  try {
    const data = await insertNewDocument(TipoProducto, { nombre, detalle });
    res.status(200).json(data);
  } catch (error) {
    console.error("Read error:", error);
    res.status(500).send("Error inserting data");
  }
};

module.exports = {
  getTipoProducto,
  newTipoProducto,
};
