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

class ListadoSeguimientos{
    constructor() {
        this._listado = {};
    }

    get listadoArr() {
        const listado = [];
        Object.keys(this._listado).forEach( key => {
            const tarea = this.listado[key];
            listado.push( tarea );
        });

        return listado;
    }
    
    cargarTareasFromArray( datos = [] ) {
        datos.forEach( envio => {
            this._listado[envio.id] = envio;
        });
    }
        crearSeguimientos(datos){
            const envio= new Seguimientos(
            datos.idEnvio,
            datos.fecha,
            datos.hora,
            datos.lugar);
        this._listado[Seguimientos.id] = Seguimientos;
        }
    }

module.exports = {
    seguimiento
}