var express = require('express');
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
});
