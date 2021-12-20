console.log("Muestra de codigo")

//Codigo de transiciones de los input de login y registro --------------------------------------
const inputs = document.querySelectorAll(".input");


function addcl(){
    let parent = this.parentNode.parentNode;
    parent.classList.add("focus");
}

function remcl(){
    let parent = this.parentNode.parentNode;
    if(this.value == ""){
        parent.classList.remove("focus");
    }
}

inputs.forEach(input => {
    input.addEventListener("focus", addcl);
    input.addEventListener("blur", remcl);
});


//Usuarios de parte del login -----------------------------------------------------------------
var objPeople = [
    {
        usuario: 'Jose@gmail.com',
        contraseña: '12345'
    },
    {
        usuario: 'Sierra@gmail.com',
        contraseña: '1234567'
    },
    {
        usuario: 'Oliver@gmail.com',
        contraseña: 'contraseña123'
    }
]


// login functionality -----------------------------------------------------------------------
function Loggin(evt) {
      evt.preventDefault();

    let usuario = document.getElementById('usuario').value;
    let contraseña = document.getElementById('contraseña').value;

    for(var i = 0; i < objPeople.length; i++) {
        if(usuario == objPeople[i].usuario && contraseña == objPeople[i].contraseña) {
             console.log(usuario + ' se ha logeado con exito');
             document.getElementById("usuario").value = "";
             document.getElementById("contraseña").value = "";
            break;
        } else {
            console.log(' Usuario Incorrecto');
            document.getElementById("usuario").value = "";
            document.getElementById("contraseña").value = "";
        }
    } return usuario;
}



//Codigo de la parte de Registro----------------------------------------------------------------

function Registro(evt){
    evt.preventDefault();

    let correo = document.getElementById("correo").value
    let password = document.getElementById("password").value
    let apellido = document.getElementById("apellido").value
    let nombre = document.getElementById("nombre").value
    var newUser = {
        usuario: correo,
        contraseña: password
    }
                console.log(nombre)
                console.log(apellido)
                console.log(password)
                console.log(correo)

    for(var i = 0; i < objPeople.length; i++) {
        if(correo == objPeople[i].usuario) {
            alert("Este Correo ya esta en uso :v");
            console.log("Este correo ya esta en uso");
            break;
        } else if (password.length < 5) {
            alert('Debe incluir 5 o más caracteres.');
            console.log("Debe incluir 5 o más caracteres.");

            break;
        }else{
          console.log("Registro correcto");

                document.getElementById("correo").value = "";
                document.getElementById("password").value = "";
                document.getElementById("nombre").value = "";
                document.getElementById("apellido").value = "";


        }
    }
    objPeople.push(newUser);
    console.log(objPeople);
} 



//Usuarios de parte del Clientes -----------------------------------------------------------------
var clienteReg = [
    {
        cui: '1234567'
    },
    {
        cui: '87654321'
    },
    {
        cui: '18273645'
    }
]

// Registro de nuevos clientes----------------------------------------------------------------------

const listado = document.getElementById("caja");

function newCliente(evt){
    evt.preventDefault();

    let nomCliente = document.getElementById("nomCliente").value
    let apeCliente = document.getElementById("apeCliente").value
    let cui = document.getElementById("cui").value
    let departamento = document.getElementById("departamento").value

                console.log("Requisito: Administrador conectado")
                console.log(nomCliente)
                console.log(apeCliente)
                console.log(cui)
                console.log(departamento)
    var newcli = {
        cui: cui
    }
    for(var a = 0; a < clienteReg.length; a++) {
        if(cui == clienteReg[a].cui) {
            alert("Este CUI ya esta en uso :v");
            console.log("Este CUI ya esta en uso");
            break;
    
        } else if (cui.length < 7) {
            alert("El cui no debe e tener menos de 7 caracteres");
            console.log("Debe incluir 5 o más caracteres.");
                document.getElementById("nomCliente").value = "";
                document.getElementById("apeCliente").value = "";
                document.getElementById("cui").value = "";
                document.getElementById("departamento").value = "";

            break;
        }else{
            console.log("Ingreso correcto");
            document.getElementById("nomCliente").value = "";
            document.getElementById("apeCliente").value = "";
            document.getElementById("cui").value = "";
            document.getElementById("departamento").value = "";
            
        }
    }
    clienteReg.push(newcli);
    console.log(clienteReg); 

                let mostrar = "<th>" + nomCliente +"</th>";
                let mostrartwo = "<th>"+ apeCliente +"</th>";
                let mostrartree = "<th>"  + cui +"</th>";
                let mostrarfour = "<th>" + departamento +"</th>";

                listado.innerHTML += mostrar + mostrartwo + mostrartree + mostrarfour + "<br>";


}

