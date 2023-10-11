const { Schema, model } = require("mongoose");
const { collection } = require("../../constants/collections.type");

const mascotaSchema = new Schema({
  id_cliente: {
    type: Schema.Types.ObjectId,
    ref: collection.cliente,
    required: true,
  },
  tipo_mascota: {
    type: Schema.Types.ObjectId,
    ref: collection.mascota,
    required: true,
  },
  habito: {
    type: Schema.Types.ObjectId,
    ref: collection.habito_mascota,
    required: true,
  },
  nombre_mascota: {
    type: String,
    required: true,
  },
  fecha_nacimiento: {
    type: Date,
    required: true,
  },
  genero: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  esterilizacion: {
    type: String,
    required: true,
  },
});

const Mascota = model(collection.mascota, mascotaSchema);

module.exports = { Mascota };
