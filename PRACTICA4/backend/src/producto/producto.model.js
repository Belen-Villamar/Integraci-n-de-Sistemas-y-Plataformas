const { Schema, model } = require("mongoose");
const { collection } = require("../../constants/collections.type");

const productoSchema = new Schema({
  id_tipo_producto: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  nombre: {
    type: String,
    required: true,
  },
});

const Producto = model(collection.producto, productoSchema);

module.exports = { Producto };
