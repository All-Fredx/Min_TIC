const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

//controllers
const usuarioController = require ("../controllers/usuarioController");
const authController = require("../controllers/authController");
const auth = require("../middlewares/authMiddleware");
const clienteController = require("../controllers/clienteController");
const proveedorController = require("../controllers/proveedorController");


//auth
router.post("/login/", [
    check("email","Ingresa un email valido").isEmail(),
    check("password","El password debe contener minimo 10 caracteres").isLength({min:10,}),
],
authController.autenticarUsuario);

router.get("/login/auth", auth, authController.usuarioAutenticado)

//usuarios
router.post("/register/", [
    check("nombres","Los nombres son obligatorios").not().isEmpty(),
    check("email","Ingresa un email valido").isEmail(),
    check("password","El password debe contener minimo 10 caracteres").isLength({min:10,}),
],
usuarioController.crearUsuario);

//rutas Clientes
router.post("/clientes/", clienteController.agregarClientes);
router.get("/clientes/", clienteController.buscarClientes);
router.get("/clientes/:id", clienteController.buscarCliente);
router.delete("/clientes/:id", clienteController.eliminarCliente);
router.put("/clientes/:id", clienteController.actualizarCliente);

//Rutas Proveedores
router.post("/proveedores/", proveedorController.agregarProveedores);
router.get("/proveedores/", proveedorController.buscarProveedores);
router.get("/proveedores/:id", proveedorController.buscarProveedor);
router.delete("/proveedores/:id", proveedorController.eliminarProveedor);
router.put("/proveedores/:id", proveedorController.actualizarProveedor);

module.exports = router;
