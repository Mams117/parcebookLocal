//controlador de publicaciones
let Publicacion = require("../models/Publicacion");

const crear = (req, res) => {
  const params = req.body;
  if (!params.texto) {
    return res.status(404).send({
      status: "error",
      mensaje: "no hay datos en la peticion !",
    });
  }
  // instanciamos el objeto
  try {
    let publicacionNueva = new Publicacion(params);
    publicacionNueva.usuario = req.user.userId;
    publicacionNueva.save();
    return res.status(200).send({
      status: "ok",
      mensaje: "Exitosa",
      publicacionNueva,
    });
  } catch (error) {
    return res.status(500).send({
      status: "error",
      mensaje: "No fue posible efectuar la operacion !",
      error: error.message,
    });
  }
};
const detallePublicacion = async (req, res) => {
  let idPublicacion = req.params.id;

  try {
    let consulta = await Publicacion.findById(idPublicacion).exec();
    return res.status(200).send({
      status: "ok",
      mensaje: "Operacion exitosa !",
      consulta,
    });
  } catch (error) {
    return res.status(500).send({
      status: "error",
      mensaje: "No es posible ejecutar la operación !",
      error: error.message,
    });
  }
};

// solo puedo eliminar mis publicaciones !
const eliminarPublicacion = async (req, res) => {
  let idPublicacion = req.params.id;

  try {
    let consulta = await Publicacion.findOneAndDelete({
      usuario: req.user.userId,
      _id: idPublicacion,
    }).exec();

    return res.status(200).send({
      status: "ok",
      mensaje: "Operacion exitosa !",
      consulta,
    });
  } catch (error) {
    return res.status(500).send({
      status: "error",
      mensaje: "No es posible ejecutar la operación !",
      error: error.message,
    });
  }
};

module.exports = { crear, detallePublicacion, eliminarPublicacion };
