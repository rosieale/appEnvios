const { v4: uuidv } = require('uuid');

class detallesEnvios{
    constructor(id,idEnvio,idPaquetes){
        this.id=id,
        this.idEnvio=idEnvio
        this.idPaquetes=idPaquetes
        this._listado[detallesEnvios.id] = detallesEnvios;
    }
}

class ListadodetallesEnvios{
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
        creardetallesdetallesEnvios(datos){
            const detallesEnvios = new detallesEnvios(
            datos.id,
            datos.idEnvio,
            datos.idPaquetes);
        this._listado[detallesEnvios.id] = detallesEnvios;
        }
    }

module.exports = {
    ListadodetallesEnvios
}
