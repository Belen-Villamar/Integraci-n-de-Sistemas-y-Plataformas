const { Schema, model } = require("mongoose");
const { collection } = require("../../constants/collections.type");

const vacunaSchema = new Schema({
  mascota: {
    type: Schema.Types.ObjectId,
    ref: collection.mascota,
    required: true,
  },
  veterinario: {
    type: Schema.Types.ObjectId,
    ref: collection.veterinario,
    required: true,
  },
  producto: {
    type: Schema.Types.ObjectId,
    ref: collection.producto,
    required: true,
  },
  fecha_aplicacion: {
    type: String, // Puedes cambiar el tipo a Date si prefieres almacenar la fecha como objeto Date.
    required: true,
  },
  dosis: {
    type: String,
    required: true,
  },
});

const Vacuna = model(collection.vacuna, vacunaSchema);

module.exports = { Vacuna };
