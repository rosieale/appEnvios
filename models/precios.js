const { v4: uuidv } = require('uuid');

class precios{
    constructor(id,cantidad,valor,estado){
        this.id=id,
        this.cantidad=cantidad
        this.valor=valor
        this.estado=estado
        this._listado[precios.id] = precios;
    }
}

class ListadoPrecios{
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
        crearPrecios(datos){
            const envio= new Precios(
            datos.id,
            datos.cantidad,
            datos.valor,
            datos.estado);
        this._listado[Precios.id] = precios;
        }
    }

module.exports = {
    precios
}