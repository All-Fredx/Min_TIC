import { createContext } from "react";

const UserContext = createContext ({
    nombre:null,
    edad:null,
    genero:null,
});

export default UserContext