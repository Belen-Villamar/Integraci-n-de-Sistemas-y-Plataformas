const { Schema, model } = require("mongoose");
const { collection } = require("../../constants/collections.type");

const veterinarioSchema = new Schema({
  veterinaria: {
    type: Schema.Types.ObjectId,
    ref: collection.veterinaria,
    required: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
});

const Veterinario = model(collection.veterinario, veterinarioSchema);

module.exports = { Veterinario };
