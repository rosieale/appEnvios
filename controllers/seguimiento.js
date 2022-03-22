const { response, request } = require("express");
const { ListadoSeguimientos } = require('../models/seguimientos');
const { guardarDB, leerDB } = require('../helpers/gestorDB')

const GetSeguimientos = (req = request, res = response) =>{
    //res.send('GETEndpoint para Seguimientos')
    let lista = new ListadoSeguimientos()
    let datosJSON = leerDB('seguimientos');
    lista.cargarTareasFromArray(datosJSON)
    res.json(lista.listadoArr)
}

const PostSeguimientos = (req = request, res = response) =>{
    //res.send('POST Endpoint para Seguimientos')
    let lista = new ListadoSeguimientos()
    let datosJSON = leerDB('Seguimientos');
    lista.cargarTareasFromArray(datosJSON)
    lista.crearSeguimientos(req.body)
    guardarDB(lista.listadoArr,'Seguimientos')
    res.send('Registro Creado')
}

const PutSeguimientos = (req = request, res = response) =>{
    //res.send('PUT Endpoint para Seguimientos')
    let lista = new ListadoSeguimientos()
    let datosJSON = leerDB('Seguimientos');
    lista.cargarTareasFromArray(datosJSON)
    //funcion para actualizar
    const datos = lista.listadoArr.map(item =>
          item.id == req.params.id ? {"id":item.id, ...req.body}: item
        );
    guardarDB(datos,'Seguimientos')
    res.send('Registro Actualizado')
}

const DeleteSeguimientos = (req = request, res = response) =>{
    //res.send('DELETE Endpoint para Seguimientos')
    let lista = new ListadoSeguimientos()
    let datosJSON = leerDB('seguimientos');
    lista.cargarTareasFromArray(datosJSON)
    let data = lista.listadoArr.filter(item =>  item.id !== req.params.id)
    guardarDB(data,'seguimientos')
    res.send('Registro Eliminado')
}
module.exports ={
    GetSeguimientos,
    PostSeguimientos,
    PutSeguimientos,
    DeleteSeguimientos
}