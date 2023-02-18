/// Franco Ferrari Ejercicio if 5
function mostrar() {

	let edad = parseInt(document.getElementById("txtIdEdad").value);
	let mensaje;

	if (edad > -1) {
		if (edad >= 13 && edad <= 17) {
			mensaje = "Es adolecente";
		} else {
			mensaje = "No es adolecente";
		}
	}
	else { mensaje = "No es una edad valida" }
	alert(mensaje);
}