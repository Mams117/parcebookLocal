//Controlador para hacer seguimiento a perfiles de usuario
const Seguir = require("../models/Seguir");
const Perfil = require("../models/Perfil");

// Accion para guardar el seguimiento a un perfil
const guardar = async (req, res) => {
  try {
    // obtener la data del formulario - Body -
    // este es el id del usuario a seguir
    let perfilAseguir = req.body.perfilseguido;
    // obtenemos el id del usuario registrado en el sistema
    let perfilIngreso = req.user.userId;
    // creamos el objeto de acuerdo al modelo: seguir
    let seguirUsuario = new Seguir({ perfil: perfilIngreso, seguido: perfilAseguir });
    // Guardar objeto en la BD
    seguirUsuario.save();
    return res.status(200).send({
      status: "ok",
      mensaje: "Seguimiento Exitoso !",
    });
  } catch (error) {
    return res.status(400).send({
      status: "error",
      mensaje: "No fue posible hacer la operación",
    });
  }
};

//dejar de seguir
const borrarSeguir = async (req, res) => {
  //obtener el id del usuario ingresado en el sistema
  let perfilIngreso = req.user.userId;
  // perfil de usuario que ya no quiero seguir
  let perfilseguido = req.params.id;

  try {
    let consulta = await Seguir.findOneAndDelete({ perfil: perfilIngreso, seguido: perfilseguido }).exec();
    return res.status(200).send({
      status: "ok",
      mensaje: "Ya no sigues ese perfil !",
    });
  } catch (error) {
    return res.status(400).send({
      status: "error",
      mensaje: error.message,
    });
    // hallar el perfil y borrarlo
  }
};
//listado de usuarios que sigo
const siguiendo = (req, res) => {
  //pagina inicial para paginacion
  let page;

  if (req.params.page) {
    page = req.params.page;
  }
  page = parseInt(page);
  let itemsPerPage = 5;
  // necesario para el funcionamiento del moongoose paginate v2
  const options = {
    page,
    limit: itemsPerPage,
    sort: { _id: 1 },
  };

  Perfil.paginate({}, options)
    .then((result) => {
      if (!result) {
        return res.status(404).send({
          status: "error",
          mensaje: "No hay Registros para mostrar !",
        });
      }
      console.log(result);
      // devuelve el resultado
      return res.status(200).send({
        status: "ok",
        mensaje: "Listado de seguidores",
        perfiles: result.docs,
        page,
        limite: result.limit,
        totalpaginas: result.totalPages,
        registros: result.totalDocs,
      });
    })
    .catch((error) => {
      return res.status(500).send({
        status: "error",
        mensaje: "error al generar el listado",
        error,
      });
    });
};
module.exports = {
  guardar,
  borrarSeguir,
  siguiendo,
};
