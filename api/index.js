const conexionBD = require('./module/coneccion.js');
const express = require("express");
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;
// direcciones
app.use(express.static('public'));
app.use('/Css',express.static(__dirname+'api/public/Css'));
app.use('/js',express.static(__dirname+'api/public/js'));

//raiz
app.get('/' , (req , res)=>{
    conexionBD.con.query('select * from cliente', (err , rows) =>{
        if (err) {
            console.log('F');
        }
        else{
        console.log(rows);}
    } );
    console.log(path.join(__dirname,'../views/share/Clientes.html'));
    res.status(201).sendFile(path.join(__dirname,'../views/share/Clientes.html'));
 });
 
 // Para el registro de pacientes 
 app.get('/Pacientes' , (req , res)=>{
    console.log(path.join(__dirname,'../views/IngresoClientes.html'));
    res.status(201).sendFile(path.join(__dirname,'../views/IngresoClientes.html'));
});
// Para el inicio del servert
app.get('/Clientes' , (req , res)=>{
    console.log(path.join(__dirname,'../views/share/Clientes.html'));
    res.status(201).sendFile(path.join(__dirname,'../views/share/Clientes.html'));
});
//El registro de pacientes
app.get('/Registro' , (req , res)=>{
    console.log(path.join(__dirname,'../views/Registro.html'));
    console.log("Requisito EL administrador debe logearse");
    res.status(201).sendFile(path.join(__dirname,'../views/Registro.html'));
});
//CAmbiar datos del examen
app.get('/Cambio' , (req , res)=>{
    console.log(path.join(__dirname,'../views/CambiarExamen.html'));
    res.status(201).sendFile(path.join(__dirname,'../views/CambiarExamen.html'));
});
//Relacionar examen con el cliente
app.get('/Asignar-Examen' , (req , res)=>{
    console.log(path.join(__dirname,'../views/Asignar-Examen.html'));
    res.status(201).sendFile(path.join(__dirname,'../views/Asignar-Examen.html'));
});

//Para la realizacion de examenes
app.get('/Crear-Examen' , (req , res)=>{
    console.log(path.join(__dirname,'../views/Crear-Examen.html'));
    res.status(201).sendFile(path.join(__dirname,'../views/Crear-Examen.html'));

});

//editar Registro de Paciente
app.get('/EditRegistro' , (req , res)=>{
    console.log(path.join(__dirname,'../views/EditarRegistro.html'));
    res.status(201).sendFile(path.join(__dirname,'../views/EditarRegistro.html'));
});
//ver consulta
app.get('/Resultados' , (req , res)=>{
    console.log(path.join(__dirname,'../views/VerConsulta.html'));
    res.status(201).sendFile(path.join(__dirname,'../views/VerConsulta.html'));
});
// manejo de errores
app.use((error , req , res , next)=>{
    res.status(400).json({
        status : 'error',
        message  : error.mensaje,
    });
});
app.listen(port , ()=> console.log('> Server is up and running on port : ' + port));