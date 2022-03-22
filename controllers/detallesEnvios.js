const { request, response } = require('express')
const { ListadoDetallesEnvios } = require('../models/detallesEnvios')
const { guardarDB, leerDB } = require('../helpers/gestorDB')

const getDetallesEnvios = (req = request, res = response) => {
    let lista = new ListadoDetallesDetallesEnvios()
    let datosJSON = leerDB('detalleEnvios');
    lista.cargarTareasFromArray(datosJSON)
    res.json(lista.listadoArr)
}

const postDetallesEnvios = (req = request, res = response) =>{
    let lista = new ListadoDetallesEnvios()
    let datosJSON = leerDB('detallesEnvios');
    lista.cargarTareasFromArray(datosJSON)
    lista.crearDetallesEnvios(req.body)
    guardarDB(lista.listadoArr, 'detalleEnvios')
    res.send('Registro Creado')
}

const putDetallesEnvios
 = (req = request, res = response) =>{
     let lista = new ListadoDetallesEnvios()
     let datosJSON = leerDB('detallesEnvios');
     lista.cargarTareasFromArray(datosJSON)
     //funcion para actualizar
     const datos = lista.listadoArr.map(p => 
        p.id == req.params.id
        ? {"id":p.id,...req.body}
        : p
    );
    guardarDB(datos,'detalleEnvios')
    res.send('Registro Actualizado')
 }

 const deleteDetallesEnvios = (req = request, res = response) =>{
     let lista = new ListadoDetallesEnvios()
     let datosJSON = leerDB('detallesEnvios');
     lista.cargarTareasFromArray(datosJSON)
     //funcion para eliminar
     let data = lista.listadoArr.filter(item => item.id !== req.params.id)
     guardarDB(data,'detalleEnvios')
     res.send('Registro Eliminado')
 }

module.exports = {
    getDetallesEnvios,
    postDetallesEnvios,
    putDetallesEnvios,
    deleteDetallesEnvios
}