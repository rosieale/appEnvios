const express = require('express');
const res = require('express/lib/response');

class Server{
    constructor(){
        this.app = express()
        // CORS
        this.app.use(cors());
        //Lectura y parseo del body
        this.app.use(express.static('public'));
        this.routes();
    }

    routes() {
        this.app.use('/precios',require('../routes/precios'))
        this.app.use('/detalleenvios',require('../routes/detallesEnvios'))
        this.app.use('/envios',require('../routes/envios')) 
        this.app.use('/paquete',require('../routes/envios'))
        this.app.use('/seguimiento', require('../routes/paquetes'))
    }
    
    listen() {
        this.app.listen(process.env.PORT, () =>
        console.log("El puerto esta corriendo en el puerto TCP" + process.env.PORT))
    }
}       

module.exports = Server


        /* .get('/', (req, res){
            res.send('Hello World')
        })
        this.app.listen(process.env.PORT, () =>
        console.log("El puerto esta corriendo el puerto TCP" + process.env.PORT))
    }
}*/
