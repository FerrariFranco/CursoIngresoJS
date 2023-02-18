/// Franco Ferrari Ejercicio if 2
function mostrar() {
	let edad = parseInt(document.getElementById("txtIdEdad").value);
	let mensaje;
	if (edad > -1) {
		if (edad > 17) {
			mensaje = "Es mayor de edad";
		} //else {
		//console.log("no es mayor de edad");
		//};
	}
	else { mensaje = "No es una edad valida" }


	alert(mensaje);

}//FIN DE LA FUNCIÓN