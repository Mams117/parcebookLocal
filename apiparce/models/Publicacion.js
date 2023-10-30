const { Schema, model } = require("mongoose");
const PublicacionSchema = Schema({
  usuario: {
    type: Schema.ObjectId,
    ref: "Perfil",
  },
  texto: {
    type: String,
    required: true,
  },
  file: String,
  creado: {
    type: Date,
    default: Date.now,
  },
});
module.exports = model("Publicacion", PublicacionSchema, "Publicacion");
