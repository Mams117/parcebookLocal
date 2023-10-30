// router de perfil
const express = require("express");
const router = express.Router();
const seguirControlador = require("../controllers/Seguir");
const auth = require("../controllers/auth");

router.post("/seguir/nuevo", auth, seguirControlador.guardar);
router.delete("/seguir/noseguir/:id", auth, seguirControlador.borrarSeguir);
router.get("/seguir/siguiendo/:page?", auth, seguirControlador.siguiendo);

module.exports = router;
