const mysql = require('mysql');
//set database  conecciones
const config = {
    host: 'localhost',
    user: 'root',
    password: '12345gf',
    database: 'api',
};
//crear mysql pool
const pool = mysql.createPool(config);
//exportar el pool
module.exports = pool;