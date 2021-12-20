let myFunction=()=>  {
    console.log("Se ha Selecionado un examen");
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
        precio: document.querySelector("input[name='precio']").value,
        grupo: document.querySelector("[name='categoria']").value,
        RangeInf: document.querySelector("input[name='rangoinf']").value,
        RangeSup: document.querySelector("input[name='rangosup']").value,
        Unidad: document.querySelector("input[name='unidad']").value,
    }
    console.log(capdate);
    console.log("se confirma el Cambio de la propiedades del examen");
}