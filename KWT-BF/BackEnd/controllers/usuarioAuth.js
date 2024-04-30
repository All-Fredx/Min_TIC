const Usuarios = require("../models/Usuarios");
const jwt = require("jsonwebtoken");

const maxExpires = 3*60*50;

const crearToken = (id) => {
    return jwt.sign({id}), "Clave secreta", {
        expiresIn:maxExpires,
    };
};

const handleErrores = (err) => {
    let errores = {correo:"", password: ""}
    console.log(err)
    if (err.message === "Correo incorrecto"){
        errores.correo = "El correo no esta registrado"
    }
    if (err.message === "Contraseña incorrecta"){
        errores.password = "La contraseña es incorrecta"
    }
}

module.exports.register = async (req, res, net ) => {
    try {
        const {correo, password} = req.body;
        const user = await Usuarios.post
    } catch (error) {
        
    }
}