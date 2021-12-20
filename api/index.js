const express = require("express")
const app = express()
const path = require('path');
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.use('/Css',express.static(__dirname+'api/public/Css'));
app.use('/js',express.static(__dirname+'api/public/js'));


app.get('/' , (req , res)=>{
    res.json({ mensaje: '¡Hola Mundo!' })   
 });
 
 app.get('/Pacientes' , (req , res)=>{
    console.log(path.join(__dirname,'../views/IngresoClientes.html'));
    res.status(201).sendFile(path.join(__dirname,'../views/IngresoClientes.html'));
});
app.get('/Clientes' , (req , res)=>{
    console.log(path.join(__dirname,'../views/share/Clientes.html'));
    res.status(201).sendFile(path.join(__dirname,'../views/share/Clientes.html'));
});
app.get('/Registro' , (req , res)=>{
    console.log(path.join(__dirname,'../views/Registro.html'));
    console.log("Requisito EL administrador debe logearse");
    res.status(201).sendFile(path.join(__dirname,'../views/Registro.html'));
});
 app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))