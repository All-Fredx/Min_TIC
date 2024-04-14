const express = require ('express');
const app = express();

const jwt = require('jsonwebtoken');
const keys = require('./keys/keys');
app.set('key', keys.key);
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.get('/', (req, res) =>{
    res.send("Hola Mundo");
});

//Configuración, JWT
app.post("/logueo", (req, res) =>{
    if(req.body.usuario == "Alfred" && req.body.pass == "12345"){
        const payload = {
            check: true
        };
        const token = jwt.sign(payload, app.get("key"),{
            expiresIn:"1m"
        });
        res.json({msg:"El usuario se encuentra logueado", token: token});
    }else{
        res.json({msg:"El usuario y/o la contraseña son incorrectos"});
    }
});

const verificacion = express.Router();
verificacion.use((req, res, next) =>{
    let token = req.headers["access-token"] || req.headers["authorization"];
    if(!token){
        res.status(401).send({msg:"Debe ingresar un token valido para autenticarse"})
        return
    };
    if (token.startsWith("Bearer ")){
        token = token.slice(7, token.length);
        console.log(token);
    }

    if(token){
        jwt.verify(token, app.get("key"), (error, decoded) => {
            if(error){
                return res.json({msg:"Token no valido"});
            }else{
                req.decoded = decoded;
                next();
            }
        });
    }
    //console.log(token);
});

app.get("/info", verificacion, (req, res) =>{
    res.json("Ingreso exitoso");
});




app.listen(3000, () => {
    console.log("The server is conected... http://localhost:3000");
});