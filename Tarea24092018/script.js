
function guardarTelefono(){

    localStorage.setItem("habitacion",document.getElementById("habitacion").value);
	localStorage.setItem("celular",document.getElementById("celular").value);
	localStorage.setItem("trabajo",document.getElementById("trabajo").value);
	

}

function getTelefono(){

	document.getElementById("habitacion").value = localStorage.getItem("habitacion");
	document.getElementById("celular").value = localStorage.getItem("celular");
	document.getElementById("trabajo").value = localStorage.getItem("trabajo");

	localStorage.clear();

	/*document.getElementById("tel1").innerHTML = habitacion;
    document.getElementById("tel2").innerHTML = celular;
    document.getElementById("tel3").innerHTML = trabajo;*/
}