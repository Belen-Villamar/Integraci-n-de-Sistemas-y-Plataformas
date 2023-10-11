const {
  getAllDocuments,
  insertNewDocument,
} = require("../../adapters/MongooseAdapter");
const { VentaDetalle } = require("./venta_detalle.model");

const getVentaDetalle = async (req, res) => {
  try {
    const venta_detalle = await getAllDocuments(VentaDetalle);
    res.status(200).json(venta_detalle);
  } catch (error) {
    console.error("Read error:", error);
    res.status(500).send("Error reading data");
  }
};

const newVentaDetalle = async (req, res) => {
  const {
    detalle_producto,
    valor_unitario,
    cantidad_venta,
    subtotal,
    iva,
    total,
  } = req.body;
  try {
    const venta_detalle = await insertNewDocument(VentaDetalle, {
      detalle_producto,
      valor_unitario,
      cantidad_venta,
      subtotal,
      iva,
      total,
    });
    res.status(200).json(venta_detalle);
  } catch (error) {
    console.error("Read error:", error);
    res.status(500).send("Error inserting data");
  }
};

module.exports = {
  getVentaDetalle,
  newVentaDetalle,
};
