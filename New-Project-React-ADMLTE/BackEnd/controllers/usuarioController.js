const Usuarios = require("../models/Usuarios");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

exports.crearUsuario = async (req, res) => {
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }
  const {email, password } = req.body;

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
exports.buscarUsuarioID = async(req,res) => {
  const id = req.params.id;
  try {
     let usuario = await Usuarios.findById(id);
     if(!usuario){
      res.status(400).json({msg:"Usuario no encontrado con ese ID"});
      return;
     }
     res.json(usuario);
  } catch (error) {
      console.log(error)
      res.status(404).send({msg:"Hubo un error al buscar el usuario"});
  }
};
exports.buscarUsuario = async(req,res) => {
  const { email } = req.params;
  try {
     let usuario = await Usuarios.findOne({email});
     if(!usuario){
      res.status(400).json({msg:"Usuario no encontrado con ese ID"});
      return;
     }
     res.json(usuario);
  } catch (error) {
      console.log(error)
      res.status(404).send({msg:"Hubo un error al buscar el usuario"});
  }
};
exports.modificarUsuario = async (req, res) => {
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }
  const id = req.params.id;
  const { nombres, email } = req.body;
  try {
    let usuario = await Usuarios.findById(id);
    if (!usuario) {
      return res.status(404).json({ msg: "Usuario no encontrado" });
    } else {
      if (email !== usuario.email){
        let otroUsuario = await Usuarios.findOne({email});
        if (otroUsuario) {
          return res.status(400).json({ msg: "Ya existe un usuario con ese correo electrónico" });
        }
      }
      usuario.nombres = nombres,
      usuario.email = email;
      await usuario.save();
      res.json({ msg: "Usuario actualizado correctamente" });
    }
  } catch (error) {
    console.log(error);
    res.status(400).send({msg:"Hubo un error al actualizar el usuario"});
  }
};
exports.actualizarContrasena = async (req, res) => {
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }
  const { contrasenaAnterior, nuevaContrasena } = req.body;
  const id = req.params.id;
  try {
     let usuario = await Usuarios.findById(id);
    if (!usuario) {
      return res.status(404).json({ msg: "Usuario no encontrado" });
    }
    const contrasenaValida = await bcryptjs.compare(
      contrasenaAnterior,
      usuario.password
    );
    if (!contrasenaValida) {
      return res.status(400).json({ msg: "La contraseña anterior es incorrecta" });
    }
    usuario.password = await bcryptjs.hash(nuevaContrasena, 12);
    await usuario.save();
    res.json({ msg: "Contraseña actualizada correctamente" });
  } catch (error) {
    console.log(error);
    res.status(400).send("Hubo un error");
  }
};
exports.eliminarUsuario = async (req, res) => {
  const { email } = req.params;
  try {
    let usuario = await Usuarios.findOneAndDelete({email});
    if (!usuario) {
      return res.status(404).json({ msg: "Usuario no encontrado" });
    }
    await Usuarios.findOneAndDelete({_id: req.params.id});

    res.json({ msg: "Usuario eliminado correctamente" });
  } catch (error) {
    console.log(error);
    res.status(400).send("Hubo un error al eliminar el usuario");
  }
};
/**
 * 
 * exports.buscarUsuarios = async(req,res) => {
  try {
     const usuarios = await Usuarios.find();
     res.json({usuarios});
  } catch (error) {
      console.log(error)
      res.status(500).send({msg:"Hubo un error al buscar los usuarios"});
  }
};
 */

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
