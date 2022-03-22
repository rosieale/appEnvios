const { response, request } = require("express");
const { ListadoPaquetes } = require('../models/paquetes');
const { guardarDB, leerDB } = require('../helpers/gestorDB')

const GetPaquetes = (req = request, res = response) =>{
    //res.send('GETEndpoint para Paquetes')
    let lista = new ListadoPaquetes()
    let datosJSON = leerDB('paquetes');
    lista.cargarTareasFromArray(datosJSON)
    res.json(lista.listadoArr)
}

const PostPaquetes = (req = request, res = response) =>{
    //res.send('POST Endpoint para Paquetes')
    let lista = new ListadoPaquetes()
    let datosJSON = leerDB('Paquetes');
    lista.cargarTareasFromArray(datosJSON)
    lista.crearPaquetes(req.body)
    guardarDB(lista.listadoArr,'Paquetes')
    res.send('Registro Creado')
}

const PutPaquetes = (req = request, res = response) =>{
    //res.send('PUT Endpoint para Paquetes')
    let lista = new ListadoPaquetes()
    let datosJSON = leerDB('Paquetes');
    lista.cargarTareasFromArray(datosJSON)
    //funcion para actualizar
    const datos = lista.listadoArr.map(item =>
          item.id == req.params.id ? {"id":item.id, ...req.body}: item
        );
    guardarDB(datos,'Paquetes')
    res.send('Registro Actualizado')
}

const DeletePaquetes = (req = request, res = response) =>{
    //res.send('DELETE Endpoint para Paquetes')
    let lista = new ListadoPaquetes()
    let datosJSON = leerDB('paquetes');
    lista.cargarTareasFromArray(datosJSON)
    let data = lista.listadoArr.filter(item =>  item.id !== req.params.id)
    guardarDB(data,'paquetes')
    res.send('Registro Eliminado')
}
module.exports ={
    GetPaquetes,
    PostPaquetes,
    PutPaquetes,
    DeletePaquetes
}