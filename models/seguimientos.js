const { v4: uuidv } = require('uuid');

class seguimiento{
    constructor(idEnvio,fecha,hora,lugar){
        this.idEnvio = idEnvio
        this.fecha = fecha
        this.hora = hora
        this.lugar = lugar
        this._listado[seguimiento.id] = seguimiento;
    }
}

module.exports = {
    seguimiento
}