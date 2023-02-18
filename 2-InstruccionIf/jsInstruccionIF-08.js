/// Franco Ferrari Ejercicio if 8
function mostrar() {


	let edad = parseInt(document.getElementById("txtIdEdad").value);
	let estadoCivil = document.getElementById("estadoCivil").value;
	let mensaje;

	if (edad > -1) {
		if (edad > 17 && estadoCivil == "Soltero") {
			mensaje = "Es soltero y no es menor";
		}
		else {
			console.log("")
		}
	}
	else { mensaje = "No es una edad valida" }
	alert(mensaje);
}