const Usuarios = require("../models/Usuarios");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

exports.crearUsuario = async (req, res) => {
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }

  const { email, password } = req.body;

  try {
    let usuario = await Usuarios.findOne({ email });
    if (usuario) {
      return res.status(400).json({ msg: "El usuario ya existe" });
    }

    usuario = new Usuarios(req.body);

    usuario.password = await bcryptjs.hash(password, 12);
    await usuario.save();

    const payload = {
      usuario: { id: usuario.id },
    };
    jwt.sign(
      payload,
      process.env.SECRETA,
      {
        expiresIn: 3600,
      },
      (error, token) => {
        if (error) throw error;
        res.json({ token });
      }
    );
  } catch (error) {
    console.log("Hay un error");
    console.log(error);
    res.status(400).send("Hubo un error");
  }
};

/*
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
*/
