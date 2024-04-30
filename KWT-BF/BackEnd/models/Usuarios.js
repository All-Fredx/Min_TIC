const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");

const usuarioSchema = mongoose.Schema({
    correo:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
},
{versionkey: false}
);

usuarioSchema.pre("Guardar", async function (next){
    const mostrar = await bcryptjs.getSalt();
    this.password = await bcryptjs.hash(this.password, mostrar );
});

usuarioSchema.statics.login = async function (correo, password) {
    const user = await this.findOne({correo});
    if (user) {
        const auth = bcryptjs.compare(password, user.password);
        if (auth) {
            return user;
        }
        throw Error("La contraseña es incorrecta")
    }
    throw Error("El correo es incorrecto")
};


module.exports = mongoose.model("Usuarios", usuarioSchema);