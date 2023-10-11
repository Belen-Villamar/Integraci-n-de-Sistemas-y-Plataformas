const { Schema, model } = require("mongoose");
const { collection } = require("../../constants/collections.type");

const compraSchema = new Schema({
  veterinaria: {
    type: Schema.Types.ObjectId,
    ref: collection.veterinaria,
    required: true,
  },
  producto: {
    type: Schema.Types.ObjectId,
    ref: collection.producto,
    required: true,
  },
  proveedor: {
    type: Schema.Types.ObjectId,
    ref: collection.proveedor,
    required: true,
  },
  fecha_compra: {
    type: String,
    required: true,
  },
});

const Compra = model(collection.compra, compraSchema);

module.exports = { Compra };
