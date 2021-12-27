const express = require('express');
const app = express();

/**** mysql */
//variables de entorno, esas vienen de docker
const mysqlhost = process.env.MYSQLHOST || '192.168.1.27';
const mysqluser = process.env.MYSQLUSER || 'clinicaMedicadmin';
const mysqlpass = process.env.MYSQLPASS || 'Password123$';
//paquete
const mysql = require('mysql');
//conexión
const con = mysql.createConnection({
    host: mysqlhost,
    user: mysqluser,
    password: mysqlpass
});
//prueba

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected! :P hola a todos");
});

/**** mysql */

app.get('/api/saludo', async (req, res) => {
    console.log("entrando /api/saludo");

    await setTimeout(() => {

        console.log("entrando2 . . . .");

        const con2 = mysql.createConnection({
            host: mysqlhost,
            user: mysqluser,
            password: mysqlpass
        });
        //prueba
        con2.connect(function (err) {
            if (err) {
                console.log("error");
                return res.status(503).json({ status: "not conected" });
            }
            else {
                console.log("not error");
                return res.status(202).json({ status: " todo bien" });
            }

        });

    }, 2500);
})

