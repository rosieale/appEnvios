const { v4: uuidv } = require('uuid');

class paquetes{
    constructor(id,descripcion,peso,volumen,clasificacion){
        this.id = id,
        this.descripcion = descripcion
        this.peso = peso
        this.volumen = volumen
        this.clasificacion = clasificacion
        this._listado[paquetes.id] = paquetes;
    }
}

class ListadoPaquetes{
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
        crearPaquetes(datos){
            const envio= new Paquetes(
            datos.id,
            datos.descripcion,
            datos.peso,
            datos.volumen,
            datos.clasificacion);
        this._listado[paquetes.id] = paquetes;
        }
    }

module.exports = {
    paquetes
}

