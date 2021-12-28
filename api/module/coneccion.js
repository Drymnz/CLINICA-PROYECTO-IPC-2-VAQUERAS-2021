/**** mysql */
//variables de entorno, esas vienen de docker
const mysqlhost ='192.168.1.9';
const mysqluser =  "prueba";
const mysqlpass = "RNnxW9hp(&U~x2s";
const mysqldatabase = "laboratorio_clinico";
//paquete
var mysql = require('mysql2');
//conexión
 var con = mysql.createConnection({
    host: mysqlhost,
    user: mysqluser,
    password: mysqlpass,
    port : 3306,
    database : mysqldatabase
});
//prueba
con.connect(function (err) {
    if (err) {
    console.log(' error en >>>>  ' + err);
    }
    else{
    console.log("Connected! :P hola a todos");
    }
});

module.exports = {
    con : con
};