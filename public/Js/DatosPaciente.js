let myFunction=()=>  {
    console.log("DPI encontrado");
    let divocul = document.querySelector('#divocul') 
    
    if (divocul.style.visibility==='visible') {
        divocul.style.visibility='hidden'
        document.getElementById("buttonConfirm").disabled = true;
    }else{
        divocul.style.visibility='visible'
        document.getElementById("buttonConfirm").disabled = false;
    }
}

let capturedata=()=> {
    var capdate= {
        identidicacion: document.querySelector("input[name='Identificacion']").value,
        Nit: document.querySelector("input[name='nit']").value,
        Nombres: document.querySelector("input[name='nombres']").value,
        edad: document.querySelector("input[name='edad']").value,
        sexo: document.querySelector("[name='sexo']").value,
        Direccion:document.querySelector("input[name='direccion']").value,
        Telefono: document.querySelector("input[name='Telefono']").value,
        Nacimiento: document.querySelector("input[name='Nacimiento']").value, 
    }
    console.log(capdate);
    console.log("se confirma el Cambio de la propiedades del examen");
}