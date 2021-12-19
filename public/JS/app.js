console.log('Iniciando app.js');


let Sumar = ()=>{
    console.log('sumando');
    modUltimaOperacion('Sumando');
};


let Restar = ()=>{
    console.log('restando');
    modUltimaOperacion('Restando');
    const getRestarDiv = document.getElementById('restarDiv');
    
    getRestarDiv.innerHTML="<button class='btn btn- primary m-6' onclick='Restar()'>Restar</button>"
};


let Dividir = ()=>{
    console.log('Dividiendo');
    modUltimaOperacion('Dividiendo');
};

let Multiplicar = ()=>{
    console.log('Multiplicando');
    modUltimaOperacion('Multiplicando');
};

let modUltimaOperacion = (mensaje)=>{
    const ultimaOperacion= document.getElementById('ultimaOperacion');
    ultimaOperacion.innerHTML = `  ${mensaje}`;
};


let Actualizar = ()=>{
  const historico = document.getElementById('historico');
  
  historico.innerHTML+="<p>Actualizando</p>";
};