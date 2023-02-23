function mostrar() {
	let edadIngresada;
	let sexoIngresado;
	let estadoCivilIngresado;
	let temperatura;
	let nacionalidad;
	let respuesta = "si";
	let bandera = true;
	let maxTemperatura;
	let nombreMasTemperatura;
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
		while (isNaN(edadIngresada) || edadIngresada <= 0 || edadIngresada >= 130 || edadIngresada == undefined) {
			edadIngresada = parseInt(prompt("Ingrese una edad valida."));

		}
		sexoIngresado = prompt("Ingrese su sexo (F; M)");
		while (sexoIngresado != "M" && sexoIngresado != "F" && sexoIngresado != "m" && sexoIngresado != "f") {
			sexoIngresado = prompt("Ingrese correctamente su sexo (F; M)");
		}
		estadoCivilIngresado = prompt("Ingrese su estado civil, 1-para soltero; 2-para casado; 3-para divorciados; 4-para viudos");
		while (estadoCivilIngresado != "1" && estadoCivilIngresado != "2" && estadoCivilIngresado != "3" && estadoCivilIngresado != "4") {
			estadoCivilIngresado = estadoCivilIngresado = prompt("Ingrese su estado civil, 1-para soltero;       2-para casado;       3-para divorciados;       4-para viudos");
		}
		temperatura = parseInt(prompt("Ingrese temperatura"));
		while (isNaN(temperatura || temperatura < 25 || temperatura >= 45)) {
			temperatura = parseInt(prompt("Ingrese una temperatura valida"))
		}

		nacionalidad = prompt("Ingrese su nacionalidad (A -si es argentino; E -si es extranjero; N -si es nacionalizado)");
		while (nacionalidad != "A" && nacionalidad != "N" && nacionalidad != "E" && nacionalidad != "a" && nacionalidad != "n" && nacionalidad != "e") {
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

		switch (estadoCivilIngresado) {
			case "1":
				if (sexoIngresado == "Masculino") {
					cantHombres = cantHombres + 1;
					acumSolteros = acumSolteros + edadIngresada;
					contSolteros = contSolteros + 1;
				}
				break;
			case "2":
				estadoCivilIngresado = "Casado/a";
				break;
			case "3":
				estadoCivilIngresado = "Divorciado/a";
				break;
			case "4":
				if (sexoIngresado == "Masculino") {
					cantHombres = cantHombres + 1;
				}
				if (edadIngresada > 17) {
					contMayores = contMayores + 1;
				}
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
			maxTemperatura = temperatura;
			nombreMasTemperatura = nombre;
			bandera = false;
		}
		else if (maxTemperatura < temperatura) {
			maxTemperatura = temperatura;
			nombreMasTemperatura = nombre;
		}

		if (edadIngresada >= 60 && temperatura > 38) {
			contadorViejos = contadorViejos + 1;
		}

		respuesta = prompt("Desea continuar? (coloque Si)");
	}

	promedioSolteros = acumSolteros / contSolteros;

	if (isNaN(promedioSolteros)) {
		promedioSolteros = 0;
	}

	alert("El nombre de la persona con mas temperatura es: " + nombreMasTemperatura + "y tuvo una temperatura de: " + maxTemperatura + "°C");
	alert("La cantidad de viudos/as que son mayores de edad es: " + contMayores + ". La cantidad de hombres viudos o solteros es de: " + cantHombres + ". Y la cantidad de personas mayores con mas de 38°C de temperatura corporal es de: " + contadorViejos);
	alert("El promedio de edad de los hombres solteros es de: " + promedioSolteros);

}
