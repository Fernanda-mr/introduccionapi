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
    
    //Mostrar todos los usuarios
    app.get('/users',(request, response) => {
        pool.query('SELECT * FROM users', (error, result) => {
            if (error) throw error;
            response.send(result);
        });
    });

    //Mostrar un usuario por ID
    app.get('/users/.id',(request, response) => {
        const id = request.params.id;
        pool.query('SELECT * FROM users WHERE id = ?', (error, result) => {
            if (error) throw error;
            response.send(result);
        });
    });
   
}