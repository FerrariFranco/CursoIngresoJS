function mostrar() {


	let numeroIngresado;
	let esPrimo;

	esPrimo = true;
	numeroIngresado = parseInt(prompt("Ingrese un número: "));
	while (isNaN(numeroIngresado)) {
		numeroIngresado = parseInt(prompt("ERROR : ingresa un numero"));
	}
	for (let i = 2; i <= numeroIngresado / 2; i++) {
		if (numeroIngresado % i === 0) {
			esPrimo = false;
			break;
		}
	}

	if (esPrimo == true) {
		console.log("es primo");
	} else {
		console.log("no es primo");
	}

}//FIN DE LA FUNCIÓN