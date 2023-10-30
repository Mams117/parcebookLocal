//orm de perfil
const { Schema, model } = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const PerfilSchema = Schema(
  {
    apodo: {
      type: String,
      required: true,
      default: "llenar",
    },
    nombre: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    rol: {
      type: String,
      default: "User",
    },
    password: {
      type: String,
      required: true,
    },
    foto: {
      type: String,
    },
    creado: {
      type: Date,
      default: Date.now,
    },
  },
  { collection: "aprendiz" }
);
PerfilSchema.plugin(mongoosePaginate);
module.exports = model("Perfil", PerfilSchema, "perfil");
