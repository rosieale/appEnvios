const { response, request } = require("express");
const { ListadoPrecios } = require('../models/precios');
const { guardarDB, leerDB } = require('../helpers/gestorDB')

const GetPrecios = (req = request, res = response) =>{
    //res.send('GETEndpoint para Precios')
    let lista = new ListadoPrecios()
    let datosJSON = leerDB('precios');
    lista.cargarTareasFromArray(datosJSON)
    res.json(lista.listadoArr)
}

const PostPrecios = (req = request, res = response) =>{
    //res.send('POST Endpoint para Precios')
    let lista = new ListadoPrecios()
    let datosJSON = leerDB('precios');
    lista.cargarTareasFromArray(datosJSON)
    lista.crearPrecio(req.body)
    guardarDB(lista.listadoArr,'precios')
    res.send('Registro Creado')
}

const PutPrecios = (req = request, res = response) =>{
    //res.send('PUT Endpoint para Precios')
    let lista = new ListadoPrecios()
    let datosJSON = leerDB('precios');
    lista.cargarTareasFromArray(datosJSON)
    //funcion para actualizar
    const datos = lista.listadoArr.map(item =>
          item.id == req.params.id ? {"id":item.id, ...req.body}: item);
    guardarDB(datos,'precios')
    res.send('Registro Actualizado')
}

const DeletePrecios = (req = request, res = response) =>{
    //res.send('DELETE Endpoint para Precios')
    let lista = new ListadoPrecios()
    let datosJSON = leerDB('precios');
    lista.cargarTareasFromArray(datosJSON)
    let data = lista.listadoArr.filter(item =>  item.id !== req.params.id)
    guardarDB(data,'precios')
    res.send('Registro Eliminado')
}
module.exports ={
    GetPrecios,
    PostPrecios,
    PutPrecios,
    DeletePrecios
}