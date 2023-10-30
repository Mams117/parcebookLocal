//orm de seguir a un perfil
const { Schema, model } = require("mongoose");

const SeguirSchema = Schema(
  {
    perfil: {
      type: Schema.ObjectId,
      ref: "Perfil",
    },
    seguido: {
      type: Schema.ObjectId,
      ref: "Perfil",
    },
    creado_en: {
      type: Date,
      default: Date.now,
    },
  },
  { collection: "seguir" }
);

module.exports = model("seguir", SeguirSchema, "seguir");
