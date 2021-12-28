/**** mysql */
//variables de entorno, esas vienen de docker
const mysqlhost ='192.168.1.27';
const mysqluser =  "clinicaMedicadmin";
const mysqlpass = "Password123$";
//paquete
var mysql = require('mysql');
//conexión
 var con = mysql.createConnection({
    host: 'localhost',
    user: mysqluser,
    password: mysqlpass,
    database : 'clinicaMedica'
});
//prueba
con.connect(function (err) {
    if (err) {
    console.log('no');
    }
    else{
    console.log("Connected! :P hola a todos");
    }
});

module.exports = {
    con : con
};