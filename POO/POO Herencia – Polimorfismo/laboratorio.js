
class empleado {
    constructor(id,tDocumento,nDocumento,nombres,tContrato,cargo,salario){
        this._tDocumento = tDocumento;
        this._nombres = nombres;
        this._id = id;
        this._tContrato = tContrato
        this._nDocumento= nDocumento;
        this._cargo = cargo;
        this._salario = salario;
    };
    get getId(){return(this._id);};
    set setId (id){this._id = id;};
    get getTDocumento(){return(this._tDocumento);};
    set setTDocumento (tDocumento){this._tDocumento = tDocumento;};
    get getNDocumento(){return(this._nDocumento);};
    set setNDocumento (n_nDocumento){this._nDocumento = n_nDocumento;};
    get getNombres(){return(this._nombres);};
    set setNombres (nombres){this._nombres = nombres;};
    get getTContrato(){return(this._tContrato);};
    set setTContrato (tContrato){this._tContrato = tContrato;};
    get getCargo(){return(this._cargo);};
    set setCargo (cargo){this._cargo = cargo;};
    get getSalario(){return(this._salario);};
    set setSalario (salario){this._salario = salario;};
};

class supervisor extends empleado {
    constructor(id,tDocumento,nDocumento,nombres,tContrato,cargo,salario,personaCargo) {
        super(id,tDocumento,nDocumento,nombres,tContrato,cargo,salario);
        this._personaCargo = personaCargo;
    };

};

class operario extends empleado {
    constructor(id,tDocumento,nDocumento,nombres,tContrato,cargo,salario,tEquipo) {
        super(id,tDocumento,nDocumento,nombres,tContrato,cargo,salario);
        this._tEquipo = tEquipo;
    };
};
