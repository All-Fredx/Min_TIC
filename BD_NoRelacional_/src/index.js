const express = require("express");
const conectarBD = require("../config/db");
const cors = require("cors");

const app = express();

conectarBD();
app.use(cors());

app.use(express.json());
app.use("/api", require("../routes/rutas"));

app.get("/", (req, res) => {
    res.send("Hola mundo");
});
app.listen(3000, () => {
    console.log("El servidor esta conectado http://localhost:3000/");
});