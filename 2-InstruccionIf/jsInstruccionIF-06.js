/// Franco Ferrari Ejercicio if 6
function mostrar() {
	let edad = parseInt(document.getElementById("txtIdEdad").value);
	let mensaje;

	if (edad > -1) {
		if (edad > 17) {
			mensaje = "Es un adulto";
		} else if (edad >= 13 && edad <= 17) {
			mensaje = "Es adolecente";
		} else {
			mensaje = "Es un niño"
		}
	}
	else { mensaje = "No es una edad valida" }
	alert(mensaje);

}
