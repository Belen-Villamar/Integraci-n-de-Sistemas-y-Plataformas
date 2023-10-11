const { model, Schema } = require("mongoose");
const { collection } = require("../../constants/collections.type");

const ventaSchema = new Schema({
  veterinaria: {
    type: Schema.Types.ObjectId,
    ref: collection.veterinaria,
    required: true,
  },
  cliente: {
    type: Schema.Types.ObjectId,
    ref: collection.cliente,
    required: true,
  },
  producto: {
    type: Schema.Types.ObjectId,
    ref: collection.producto,
    required: true,
  },
  detalle_venta: {
    type: Schema.Types.ObjectId,
    ref: collection.venta_detalle,
    required: true,
  },
  fecha_venta: {
    type: Date,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
});

const Venta = model(collection.venta, ventaSchema);

module.exports = { Venta };
