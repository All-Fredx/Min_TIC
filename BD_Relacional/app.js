import express from "express"
import cors from "cors"
import conectarBD from "./configDB/db.js";
import citasRoutes from "./routes/Routes_Citas.js";


const app = express();
app.use(express.json());
app.use(cors());
app.use("/citas", citasRoutes)


try {
    await conectarBD.authenticate();
    console.log('Conexion a la BD con exito');
  } catch (error) {
    console.error('Tenemos un error al conectar la BD', error);
};

app.get("/", (req,res)=>{
    res.send("Hola mundito")
});

app.listen (5000, ()=>{
    console.log("El servidor esta corriendo http://localhost:5000")
});