// router de perfil
const express = require("express");
const router = express.Router();
const multer = require("multer");
const perfilControlador = require("../controllers/perfil");
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

router.post("/perfil/registrar", perfilControlador.registrar);
router.get("/perfil/listar/:limite?", auth, perfilControlador.listar);
router.get("/perfil/listarUno/:id", auth, perfilControlador.listarUno);
router.delete("/perfil/borrarUno/:id", auth, perfilControlador.borrarUno);
router.post("/perfil/upload/:id", auth, uploads.single("file0"), perfilControlador.upload);
router.put("/perfil/editar/:id", auth, perfilControlador.editar);
router.post("/perfil/login", perfilControlador.login);
module.exports = router;
