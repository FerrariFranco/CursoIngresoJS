function mostrar() {
	let edadIngresada;
	let sexoIngresado;
	let estadoCivilIngresado;
	let temperatura;
	let nacionalidad;
	let respuesta = "si";
	let bandera = true;
	let mayorTemperatura;
	let nombreMayorTemperatura;
	let contMayores = 0;
	let cantHombres = 0;
	let acumSolteros = 0;
	let contSolteros = 0;
	let contadorViejos = 0;
	let promedioSolteros;
	let nombre;

	while (respuesta == "si" || respuesta == "SI" || respuesta == "Si" || respuesta == "sI") {

		nombre = prompt("Ingrese nombre");

		edadIngresada = parseInt(prompt("Ingrese su edad:"));
		while (isNaN(edadIngresada) || edadIngresada <= 0 || edadIngresada >= 130) {
			edadIngresada = parseInt(prompt("Ingrese una edad valida."));
		}
		sexoIngresado = prompt("Ingrese su sexo (F; M)");
		while (sexoIngresado != "M" && sexoIngresado != "F" && sexoIngresado != "m" && sexoIngresado != "f") {
			sexoIngresado = prompt("Ingrese correctamente su sexo (F; M)");
		}
		estadoCivilIngresado = prompt("Ingrese su estado civil");
		while (estadoCivilIngresado != "soltero" && estadoCivilIngresado != "viudo" && estadoCivilIngresado != "casado" && estadoCivilIngresado != "soltera" && estadoCivilIngresado != "viuda" && estadoCivilIngresado != "casada") {
			estadoCivilIngresado = estadoCivilIngresado = prompt("Ingrese su estado civil, correctamente!);
		}
		temperatura = parseInt(prompt("Ingrese temperatura"));
		while (isNaN(temperatura || temperatura < 31 || temperatura >= 45)) {
			temperatura = parseInt(prompt("Ingrese una temperatura valida"))
		}

		nacionalidad = prompt("Ingrese su nacionalidad (A -si es argentino; E -si es extranjero; N -si es nacionalizado)");
		while (nacionalidad != "A" && nacionalidad != "N" && nacionalidad != "E") {
			nacionalidad = prompt("Ingrese su nacionalidad (A-si es argentino;       E-si es extranjero;       N-si es nacionalizado)");
		}



		switch (sexoIngresado) {
			case "F":
			case "f":
				sexoIngresado = "Femenino";
				break;
			default:
				sexoIngresado = "Masculino";
				break;
		}

		switch (nacionalidad) {
			case "A":
				nacionalidad = "Argentino/a";
				break;
			case "E":
				nacionalidad = "Extranjero/a";
				break;
			default:
				nacionalidad = "Nacionalizado/a"
				break;
		}


		if (bandera == true) {
			mayorTemperatura = temperatura;
			nombreMayorTemperatura = nombre;
			bandera = false;
		}
		else if (mayorTemperatura < temperatura) {
			mayorTemperatura = temperatura;
			nombreMayorTemperatura = nombre;
		}


		if (edadIngresada > 17 && (estadoCivilIngresado == "viudo" || estadoCivilIngresado == "viuda")) {
			contMayores = contMayores + 1;
		}


		if (sexoIngresado == "Masculino" && (estadoCivilIngresado == "soltero" || estadoCivilIngresado == "viudo")) {
			cantHombres = cantHombres + 1;
		}


		if (edadIngresada >= 60 && temperatura > 38) {
			contadorViejos = contadorViejos + 1;
		}


		if (sexoIngresado == "Masculino" && estadoCivilIngresado == "soltero") {
			acumSolteros = acumSolteros + edadIngresada;
			contSolteros = contSolteros + 1;
		}
		respuesta = prompt("Desea continuar? (coloque Si)");
	}

	promedioSolteros = acumSolteros / contSolteros;

	if (isNaN(promedioSolteros)) {
		promedioSolteros = 0;
	}

	console.log("El nombre de la persona con mas temperatura es: " + nombreMayorTemperatura + "y tuvo una temperatura de: " + mayorTemperatura + "°C");
	console.log("La cantidad de viudos/as que son mayores de edad es: " + contMayores + ". La cantidad de hombres viudos o solteros es de: " + cantHombres + ". Y la cantidad de personas mayores con mas de 38°C de temperatura corporal es de: " + contadorViejos);
	console.log("El promedio de edad de los hombres solteros es de: " + promedioSolteros);

}
