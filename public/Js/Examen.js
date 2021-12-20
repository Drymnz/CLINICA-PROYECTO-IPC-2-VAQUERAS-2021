// manejar el incremento de examenes 
let contador = 1 ;
function agregarExamen() {
    let nombreTipo = document.getElementById('nombre-tipo').value;
    let listado = returnarListado();
    contador ++;
    let padre = document.getElementById('examen');
    let agregar = '<div class="input-block"><label for="login-Apellido">Nombre de examen '+contador+'</label> <input id="ingrese-Nombre-'+contador+'" type="text" required></div>';
    padre.innerHTML =padre.innerHTML+ agregar;
    // cargar datos
    document.getElementById('nombre-tipo').setAttribute('value',nombreTipo);
    for (let index = 0; index < (contador); index++) {
        console.log(listado[index]);
        if ((index+1) < (contador)) {
            document.getElementById('ingrese-Nombre-'+(index+1)).setAttribute('value', listado[index]);
        }
    }
};
function returnarListado() {
    let listado = [];  
    for (let index = 0; index < contador; index++) {
        listado[index] = document.getElementById('ingrese-Nombre-'+(index+1)).value;
      } 
    return listado;
}
function ingresarCliente() {
  let listado = returnarListado();
  let enviar = 'enviar';
  console.log(enviar + document.getElementById('nombre-tipo'));
  console.log(enviar + listado);
};
// buscador de cliente
function buscarCliente() {
    
    function cliente (dpi, nit,nombre,edad,telefono){
        this.dpi = dpi;
        this.nit = nit;
        this.nombre = nombre;
        this.edad = edad;
        this.telefono = telefono;
    };

    let dpi = document.getElementById('DPI').value;
    let nit = document.getElementById('NIT').value;
    let nombre = document.getElementById('Nombre').value;
    let edad = document.getElementById('Edad').value;
    let telefono = document.getElementById('Telefono').value;

    var buscarCliete = new cliente('0123456789123','0123456789123','Benjamin de Jesus Perez Aguilar','23','4678922');
console.log(buscarCliete);
    console.log('buscar a cliente con' +buscarCliete);
};