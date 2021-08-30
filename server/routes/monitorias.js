//Rutas para crear monitores
const express = require("express");
const router = express.Router();
const monitoriasController = require("../controllers/monitoriasController");

//Crear rutas
router.post("/crear", monitoriasController.crearMonitorias);
router.get("/listar", monitoriasController.listarMonitorias);
router.post("/editar", monitoriasController.editarMonitorias);
router.post("/eliminar", monitoriasController.eliminarMonitorias);

module.exports = router;