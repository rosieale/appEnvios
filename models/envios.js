class Envios{
    constructor(codigo,fecha,tracking,origen,destino,emisor,destinatario){
        this.id=codigo,
        this.codigo=codigo
        this.fecha=fecha
        this.tracking=tracking
        this.origen=origen
        this.destino=destino
        this.emisor=emisor
        this.destinatario=destinatario
    }
}

class ListadoEnvios{
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
        crearEnvio(datos){
            const envio= new Tarea(datos);
            this._listado[envio.id] = envio;
        }
    }

module.exports = {
    ListadoEnvios
}
