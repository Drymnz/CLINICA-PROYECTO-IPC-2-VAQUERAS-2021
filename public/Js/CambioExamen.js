let myFunction=()=>  {
    console.log("Se ha Selecionado un examen");
    let divocul = document.querySelector('#divocul') 
    if (divocul.style.visibility==='visible') {
        divocul.style.visibility='hidden'
    }else{
        divocul.style.visibility='visible'
    }
}