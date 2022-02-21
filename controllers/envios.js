const { request, response } = require('express')
const { ListadoEnvios } = require('../models/envios')
const { guardarDB, leerDB } = require('../helpers/gestorDB')

const getEnvios = (req = request, res = response) => {
    let lista = new ListadoEnvios()
    let datosJSON = leerDB('envios');
    lista.cargarTareasFromArray(datosJSON)
    res.json(lista.listadoArr)
}

const postEnvios = (req = request, res = response) =>{
    let lista = new ListadoEnvios()
    let datosJSON = leerDB('envios');
    lista.cargarTareasFromArray(datosJSON)
    lista.crearEnvio(req.body)
    guardarDB(lista.listadoArr, 'envios')
    res.send('Registro Creado')
}

const putEnvios
 = (req = request, res = response) =>{
     let lista = new ListadoEnvios()
     let datosJSON = leerDB('envios');
     lista.cargarTareasFromArray(datosJSON)
     //funcion para actualizar
     const datos = lista.listadoArr.map(p => 
        p.id == req.params.id
        ? {"id":p.id,...req.body}
        : p
    );
    guardarDB(datos,'envios')
    res.send('Registro Actualizado')
 }

 const deleteEnvios = (req = request, res = response) =>{
     let lista = new ListadoEnvios()
     let datosJSON = leerDB('envios');
     lista.cargarTareasFromArray(datosJSON)
     //funcion para eliminar
     let data = lista.listadoArr.filter(item => item.id !== req.params.id)
     guardarDB(data,'envios')
     res.send('Registro Eliminado')
 }