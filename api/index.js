const conexionBD = require('./module/coneccion.js');
const bcryptjs = require('bcryptjs');
const express = require("express");
const app = express();
const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
// direcciones
app.use(express.static('public'));
app.use(express.urlencoded({extended:false}));
app.use('/Css',express.static(__dirname+'api/public/Css'));
app.use('/js',express.static(__dirname+'api/public/js'));
app.use (express.json());
app.use(session({
    secret : '123456798',
    resave : true,
    saveUninitialized : true
}));

//raiz
app.get('/' , (req , res)=>{
    console.log(path.join(__dirname,'../views/Index.html'));
    res.status(201).sendFile(path.join(__dirname,'../views/Index.html'));
});
 
 // Para el registro de pacientes 
app.get('/Pacientes' , (req , res)=>{
    req.session.usuario = '';
    req.session.rol = '0';
    switch (req.session.rol) {
        case 0:
            console.log(path.join(__dirname,'../views/IngresoClientes.html'));
            res.status(201).sendFile(path.join(__dirname,'../views/IngresoClientes.html'));
            break;
        case 1:
            console.log(path.join(__dirname,'../views/Admin/Inventario.html'));
            res.status(201).sendFile(path.join(__dirname,'../views/Admin/Inventario.html'));
            break;
        case 2:
            console.log(path.join(__dirname,'../views/share/Clientes.html'));
            res.status(201).sendFile(path.join(__dirname,'../views/share/Clientes.html'));
            break;
        case 3:
            
            console.log(path.join(__dirname,'../views/IngresoClientes.html'));
            res.status(201).sendFile(path.join(__dirname,'../views/IngresoClientes.html'));

            break;
        default:
            break;
    }
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
    console.log(path.join(__dirname,'../views/Asignakey-Examen.html'));
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

//----VISTAS LLAMADAS DESDE DEPENDIENDO DEL LOGIN
//-----share/Clientes
//-----share/admin
//-----share/laboratorista
//----------------------------Secretaria----------------------------------------------

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
    res.status(201).sendFile(path.join(__dirname,'../views/Registro.html'));
});
app.get('/RegistroSec' , (req , res)=>{
    console.log(path.join(__dirname,'../views/secretaria/RegistroSec.html'));
    res.status(201).sendFile(path.join(__dirname,'../views/secretaria/RegistroSec.html'));
});
app.get('/Consultas' , (req , res)=>{
    console.log(path.join(__dirname,'../views/secretaria/consultasSec.html'));
    res.status(201).sendFile(path.join(__dirname,'../views/secretaria/consultasSec.html'));
});
/*app.get('/Agendarcita' , (req , res)=>{
    console.log(path.join(__dirname,'../views/secretaria/agendarcita.html'));
    res.status(201).sendFile(path.join(__dirname,'../views/secretaria/agendarcita.html'));
});*/
app.get('/Factura' , (req , res)=>{
    console.log(path.join(__dirname,'../views/secretaria/Factura.html'));
    res.status(201).sendFile(path.join(__dirname,'../views/secretaria/Factura.html'));
});

 //---------------------------------------------------------- Admin

 app.get('/Inventario' , (req , res)=>{
    console.log(path.join(__dirname,'../views/Admin/Inventario.html'));
    res.status(201).sendFile(path.join(__dirname,'../views/Admin/Inventario.html'));
});
app.get('/registrarEmpleado' , (req , res)=>{
    console.log(path.join(__dirname,'../views/Admin/registrarEmpleado.html'));
    res.status(201).sendFile(path.join(__dirname,'../views/Admin/registrarEmpleado.html'));
});

app.post('/registrarEmpleado', async(req,res)=>{
    let no_empleado = req.body.no_empleado;
    let dpi = req.body.dpi;
    let laboratorio = req.body.laboratorio;
    let nombre = req.body.nombre;
    const contraseña = req.body.key;
    let rango = req.body.rango;
    let no_cuenta = req.body.no_cuenta;
    let telefono = req.body.telefono;
    // incriptaicon de contraseña
    let passwordHaash = await bcryptjs.hash(contraseña,8,(error,contraseña)=>{
        if (error) {
            console.log('fallo la incriptaicon');
        } else {
            console.log('funciono todo');
        }
    });
    conexionBD.con.query('INSERT INTO empleado set ?',{
        no_empleado : 0,
        dpi : dpi,
        laboratorio : 1,
        nombre : nombre,
        contraseña : passwordHaash,
        rango : rango,
        no_cuenta : no_cuenta,
        telefono : telefono
    },async (error,resultado)=>{
        if (error) {
            console.log('fallo la creacion de empleado' + error);
        } else {
            console.log('fue creado '+ nombre);
            console.log(path.join(__dirname,'../views/Admin/registrarEmpleado.html'));
            res.status(201).sendFile(path.join(__dirname,'../views/Admin/registrarEmpleado.html'));
        }
    });
    //INSERT INTO empleado VALUES (0, 6408609680902, 1, 'Ana Maria Roman Guzman', 'temporal', 2, '12312-123-322323', '+50252634759');
});
app.get('/registrarExamen' , (req , res)=>{
    console.log(path.join(__dirname,'../views/Admin/registrarExamen.html'));
    res.status(201).sendFile(path.join(__dirname,'../views/Admin/registrarExamen.html'));
});
app.get('/Admin' , (req , res)=>{
    console.log(path.join(__dirname,'../views/share/Admin.html'));
    res.status(201).sendFile(path.join(__dirname,'../views/share/Admin.html'));
});
 //---------------------------------------------------------- Laboratorista
 app.get('/laboratorista' , (req , res)=>{
    console.log(path.join(__dirname,'../views/share/laboratorista.html'));
    res.status(201).sendFile(path.join(__dirname,'../views/share/laboratorista.html'));
});

app.get('/Resutados' , (req , res)=>{
    console.log(path.join(__dirname,'../views/lab/Resutados.html'));
    res.status(201).sendFile(path.join(__dirname,'../views/lab/Resutados.html'));
});

app.get('/vercitas' , (req , res)=>{
    console.log(path.join(__dirname,'../views/lab/vercitas.html'));
    res.status(201).sendFile(path.join(__dirname,'../views/lab/vercitas.html'));
});



// manejo de errores
app.use((error , req , res , next)=>{
    res.status(400).json({
        status : 'error',
        message  : error.mensaje,
    });
});
app.listen(port , ()=> console.log('> Server is up and running on port : ' + port));

module.exports = conexionBD.con;

app.post('/verify',function(req,res){
    const user=req.body.usuario;
    const pass=req.body.password;
    if(user && pass){
        const consulta='SELECT *FROM empleado WHERE contraseña=? AND DPI= ?';
        conexionBD.con.query(consulta,[pass,user],function(error,results,fields){
            if(error){
                console.log(error);
            }else{
                if(results.length>0){
                    console.log(results[0].rango);
                    if(results[0].Rango==1){
                        res.redirect('/Admin');
                    }else if(results[0].rango==2){
                        res.redirect('/laboratorista');
                    }else if(results[0].rango==3){
                        res.redirect('/Clientes');
                    }else{
                        res.redirect("/")
                    }
                }else {
                    res.redirect('/');
                }
            }
            res.end();
        });
    }else {
        alert("Porfavor Ingrese un usuario y contraseña");
        res.end();
    }
});

app.post('/registrarExamen', async(req,res)=>{
    const {nombre_examen, tipo, precio, unidad, rango_superior, rango_inferior} = req.body;
    const newLink= {
        nombre_examen, 
        tipo, 
        precio, 
        unidad, 
        rango_superior, 
        rango_inferior
    };
    if (nombre_examen!=null) {
        conexionBD.con.query('INSERT INTO detalle_examen set ?', [newLink]);    
    }
    res.redirect('/registrarExamen');
    },async (error,resultado)=>{
        if (error) {
            console.log('fallo la creacion de empleado' + error);
        } else {
            console.log('fue creado '+ nombre);
            console.log(path.join(__dirname,'../views/Admin/registrarEmpleado.html'));
            res.status(201).sendFile(path.join(__dirname,'../views/Admin/registrarEmpleado.html'));
        }
        
});
//INSERT INTO empleado VALUES (0, 6408609680902, 1, 'Ana Maria Roman Guzman', 'temporal', 2, '12312-123-322323', '+50252634759');
