const mongoose = require("mongoose");
require("dotenv").config({path:"variables.env"});

const conectarBD = () => {
    mongoose
    .connect(process.env.DB_MONGO)
    .then(() => console.log("Estamos conectados a mongo"))
    .catch((err) =>console.log(err));
};

module.exports = conectarBD;