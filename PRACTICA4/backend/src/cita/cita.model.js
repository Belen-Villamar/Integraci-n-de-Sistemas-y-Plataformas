const { Schema, model } = require("mongoose");
const { collection } = require("../../constants/collections.type");

const citaSchema = new Schema({
  veterinario: {
    type: Schema.Types.ObjectId,
    ref: collection.veterinario,
    required: true,
  },
  cliente: {
    type: Schema.Types.ObjectId,
    ref: collection.cliente,
    required: true,
  },
  fecha_programada: {
    type: Date,
    required: true,
  },
});

const Cita = model(collection.cita, citaSchema);

module.exports = { Cita };
