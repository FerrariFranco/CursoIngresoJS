/// Franco Ferrari Ejercicio if 7
function mostrar() {
	let edad = parseInt(document.getElementById("txtIdEdad").value);
	let estadoCivil = document.getElementById("estadoCivil").value;
	let mensaje;


	if (edad > -1) {
		if (edad < 18 && estadoCivil != "Soltero") {
			mensaje = "Es muy pequeño para NO ser soltero";
		}
		else {
			console.log("")
		}
	}
	else { mensaje = "No es una edad valida" }
	alert(mensaje);
}