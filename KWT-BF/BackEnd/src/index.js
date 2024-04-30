const express = require("express");
const cors = require("cors");
const conectarBD = require("../config/db");

const app = express();

conectarBD();
app.use(cors());
app.use(express.json());

app.listen(4000,() =>{
    console.log("El servidor esta iniciando")
})