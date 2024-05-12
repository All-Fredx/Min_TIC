const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

//controllers
const authController = require("../controllers/authController");
const auth = require("../middlewares/authMiddleware");
const usuarioController = require ("../controllers/usuarioController");
const clienteController = require("../controllers/clienteController");
const proveedorController = require("../controllers/proveedorController");

//auth
router.post("/auth", [
    check("email","Ingresa un email valido").isEmail(),
    check("password","El password debe contener minimo 10 caracteres").isLength({min:10,}),
],
authController.autenticarUsuario);

router.get("/auth", auth, authController.usuarioAutenticado)

//usuarios
router.post("/usuarios", [
    check("nombres","Los nombres son obligatorios").not().isEmpty(),
    check("email","Ingresa un email valido").isEmail(),
    check("password","El password debe contener minimo 10 caracteres").isLength({min:10,}),
],
usuarioController.crearUsuario);
router.get("/usuarios/:id", usuarioController.buscarUsuarioID);
router.get("/usuarios/mail/:email", usuarioController.buscarUsuario);
router.put("/usuarios/:id", [
    check("nombres","Los nombres son obligatorios").not().isEmpty(),
    check("email","Ingresa un email valido").isEmail(),
],
usuarioController.modificarUsuario);
router.put("/usuarios/password/:id", [
    check("nuevaContrasena","El password debe contener minimo 10 caracteres").isLength({min:10,}),
],
usuarioController.actualizarContrasena);
router.delete("/usuarios/:email", usuarioController.eliminarUsuario);

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
