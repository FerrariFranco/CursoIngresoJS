/// Franco Ferrari Ejercicio if 3
function mostrar() {
	let mensaje;
	let edad = parseInt(document.getElementById("txtIdEdad").value);
	if (edad > -1) {
		if (edad > 17) {
			mensaje = "Es mayor de edad";
		} else {
			mensaje = "No es mayor de edad";
		}
	}
	else { mensaje = "No es una edad valida" }
	alert(mensaje);

}//FIN DE LA FUNCIÓN