// router de perfil
const express = require("express");
const router = express.Router();
const multer = require("multer");
const publicacionControlador = require("../controllers/publicacion");
const auth = require("../controllers/auth");

//configuracion de subidad de archivos

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/avatars/");
  },
  filename: (req, file, cb) => {
    cb(null, "avatar-" + Date.now() + "-" + file.originalname);
  },
});

const uploads = multer({ storage });

router.post("/publicacion/crear", auth, publicacionControlador.crear);
router.get("/publicacion/detallePublicacion/:id", auth, publicacionControlador.detallePublicacion);
router.delete("/publicacion/eliminarPublicacion/:id", auth, publicacionControlador.eliminarPublicacion);
/* router.get("/perfil/listar/:limite?", auth, perfilControlador.listar);
router.get("/perfil/listarUno/:id", perfilControlador.listarUno);
router.delete("/perfil/borrarUno/:id", perfilControlador.borrarUno);
router.post("/perfil/upload/:id", uploads.single("file0"), perfilControlador.upload);
router.put("/perfil/editar/:id", perfilControlador.editar);
router.post("/perfil/login", perfilControlador.login); */
module.exports = router;
