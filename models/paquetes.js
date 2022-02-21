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

module.exports = {
    paquetes
}

