import Citas from "../models/Citas.js";

export const getAllCitas = async (req, res) => {
    try {
        const citas = await Citas.findAll();
        res.json(citas);
    } catch (error) {
        res.json({msg: error.mesage})
    }
};

export const getCita = async (req, res) => {
    try {
        const cita = await Citas.findAll({
            where: {id:req.params.id}
        });
        if(!cita[0]){
            res.status(400).json({msg:"Cita no encontrada con ese ID"});
        return;
        }
        res.json(cita[0])
    } catch (error) {
        res.json({msg: error.mesage});
        return;
    }
};

export const agregarCitas = async (req, res) => {
    try {
        await Citas.create(req.body);
        res.json({ msg: "La cita ha sido creada"});
        
    } catch (error) {
        res.json({msg: error.mesage});
    }
};

export const modificarCita = async(req, res) => {
    try {
        await Citas.update(req.body, {
            where: {id:req.params.id}
        });
        res.json({ msg: "Se modifico la cita "});

    } catch (error) {
        res.json({msg: error.mesage});
    }
};

export const eliminarCita = async (req, res) =>{
    try {
        await Citas.destroy({
            where: {id:req.params.id} 
        });
        res.json({ msg: "Se elimino la cita "});
    } catch (error) {
        res.json({msg: error.mesage});
    }
};