const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const path = require("path");

/**** mysql */
//variables de entorno, esas vienen de docker
const mysqlhost = process.env.MYSQLHOST || 'localhost';
const mysqluser = process.env.MYSQLUSER || "clinicaMedicadmin";
const mysqlpass = process.env.MYSQLPASS || "Password123$";
//paquete
const mysql = require('mysql');
//conexión
const con = mysql.createConnection({
    host: mysqlhost,
    user: mysqluser,
    password: mysqlpass,
    database : 'clinicaMedica'
});
//prueba
con.connect(function (err) {
    if (err) {
    console.log('no');}
    else{
    console.log("Connected! :P hola a todos");
    }
});

app.get('/', (req, res) => {
    con.query('select * from cliente',(err,rows)=>{
        if (err) {
            console.log('fallo');
        } else {
            console.log(rows);
        }
    }); 
});

app.listen(port, () => console.log(`listening on http://localhost:${port}`));
