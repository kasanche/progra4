var habitacion = document.getElementById('habitacion').value' ;
var celular = document.getElementById('celular').value' ;
var trabajo = document.getElementById('trabajo').value' ;

function guardarTelefono(){

    localStorage.setItem = ('habitacion', habitacion);
    localStorage.celular = ('celular', celular);
    localStorage.trabajo = ('trabajo', trabajo);
}