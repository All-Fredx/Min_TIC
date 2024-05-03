const express = require("express");
const cors = require("cors");
const conectarBD = require("../config/db");

const app = express();

conectarBD();
app.use(cors());
app.use(express.json());

//routes
app.use("/api", require("../routes/rutas"));


const PORT = process.env.PORT || 4000;
app.listen(PORT,() =>{
    console.log("El servidor esta iniciando")
})