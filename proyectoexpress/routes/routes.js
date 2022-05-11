//carga de conexión del grupo mysql
const pool = require('../data/config');

//ruta de la app
const router = app => {
    //mostrar mensaje de binvenida de root, primer ruta
    //primer endpoint
    app.get('/', (request, response)=>{
        response.send({
            message: 'Bienvenido a Node.js Express REST API'
        });
    });
}