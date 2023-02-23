function mostrar() {
	let edadIngresada;
	let sexoIngresado;
	let estadoCivilIngresado;
	let temperatura;
	let nacionalidad;
	let respuesta = "si";
	let bandera = true;
	let hot;
	let nombreHot;
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
		while (sexoIngresado != "M" && sexoIngresado != "F") {
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
		while (nacionalidad != "A" && nacionalidad != "N" && nacionalidad != "E") {
			nacionalidad = prompt("Ingrese su nacionalidad (A-si es argentino;       E-si es extranjero;       N-si es nacionalizado)");
		}

		if (sexoIngresado == "F") {
			sexoIngresado = "Femenino";
		}
		else {
			sexoIngresado = "Masculino";
		}


		switch (estadoCivilIngresado) {
			case "1":
				estadoCivilIngresado = "Soltero/a";
				break;
			case "2":
				estadoCivilIngresado = "Casado/a";
				break;
			case "3":
				estadoCivilIngresado = "Divorciado/a";
				break;
			case "4":
				estadoCivilIngresado = "Viudo/a";
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
			hot = temperatura;
			nombreHot = nombre;
			bandera = false;
		}
		else if (hot < temperatura) {
			hot = temperatura;
			nombreHot = nombre;
		}


		if (edadIngresada > 17 && estadoCivilIngresado == "Viudo/a") {
			contMayores = contMayores + 1;
		}


		if (sexoIngresado == "Masculino" && (estadoCivilIngresado == "Soltero/a" || estadoCivilIngresado == "Viudo/a")) {
			cantHombres = cantHombres + 1;
		}


		if (edadIngresada >= 60 && temperatura > 38) {
			contadorViejos = contadorViejos + 1;
		}


		if (sexoIngresado == "Masculino" && estadoCivilIngresado == "Soltero/a") {
			acumSolteros = acumSolteros + edadIngresada;
			contSolteros = contSolteros + 1;
		}
		respuesta = prompt("Desea continuar? (coloque Si)");
	}

	promedioSolteros = acumSolteros / contSolteros;

	if (isNaN(promedioSolteros)) {
		promedioSolteros = 0;
	}

	alert("El nombre de la persona con mas temperatura es: " + nombreHot + "y tuvo una temperatura de: " + hot + "°C");
	alert("La cantidad de viudos/as que son mayores de edad es: " + contMayores + ". La cantidad de hombres viudos o solteros es de: " + cantHombres + ". Y la cantidad de personas mayores con mas de 38°C de temperatura corporal es de: " + contadorViejos);
	alert("El promedio de edad de los hombres solteros es de: " + promedioSolteros);

}
