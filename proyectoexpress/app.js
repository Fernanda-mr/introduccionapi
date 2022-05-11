//Require packges and set the port
const express = require('express');
const port = 3002;
//para permitir manejo de POST Y PUT
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const app = express();

//usar node.js body parsing middleware
app.use(bodyParser.json()); //tranformacion a json parte importante para que el flujo de datos sea estandarizado en lo que necesitamos
app.use(bodyParser.urlencoded({
    extended:true,
}));
routes(app);

//Iniciar el servidor
const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
    console.log(`El servidor escucha en el puerto ${server.address().port}`)
});















/*var express = require('express');
var app = express();
//enpoint
app.get('/hola', function(req, res){
    res.send('Hola Mundo!');
});
//enpoint
app.get('/adios', function(req, res){
    res.send('Adios Mundo!');
});

app.listen(3000, function(){
    console.log('Aplicación ejemplo, escuchando el puerto 3000!');
});*/
