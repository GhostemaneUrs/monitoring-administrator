//Rutas para crear monitores
const express = require("express");
const router = express.Router();
const monitoresController = require("../controllers/monitoresController");

//Crear rutas
router.post("/crear", monitoresController.crearMonitores);
router.post("/obtener", monitoresController.obtenerMonitor);
router.get("/listar", monitoresController.listarMonitores);
router.post("/editar", monitoresController.editarMonitores);
router.post("/eliminar", monitoresController.eliminarMonitores);

module.exports = router;
