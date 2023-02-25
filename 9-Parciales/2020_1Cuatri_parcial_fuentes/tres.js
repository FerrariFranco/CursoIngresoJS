function mostrar() {
	/*
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
*/


	/* "Mapa Mundi"
	Realizar el algoritmo que permita ingresar 5 paises:
	el continente (validar entre America , Asia , Europa ,Africa y Oceania) 
	el nombre del país, 
	cantidad de habitantes en millones entre 1 y 7000 (validar)
	el nivel de pobresa entre (pobre, rico, millonario) en europa no hay paises pobre(validar)
	la temperaruta mínima que se registra en su territorio(entre -50 y 50)
	a)La cantidad de temperaturas pares.
	b)la cantidad de temperaturas impares de europa
	c)El nombre del pais con menos habitantes
	d)la cantidad de paises que superan los 40 grados.
	e)la cantidad de paises de america que tienen menos de 0 grados .
	f)el promedio de habitantes entre los paises ingresados .
	g)el promedio de habitantes entre los paises que superan los 40 grados
	H) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura. 
	i) que continente tiene mas habitantes.*/

	let pais;
	let continente;
	let nivelPobreza;
	let habitantes;
	let temperatura;
	let acumuladorAmerica = 0;
	let acumuladorEuropa = 0;
	let acumuladorAsia = 0;
	let acumuladorOceania = 0;
	let acumuladorAfrica = 0;
	let masHabitantes = 0;
	let temperaturaPar = 0;
	let temperaturaImpar = 0; // Europa
	let banderaPaisMenosHabitantes = true;
	let nombrePaisMenos;
	let paisMenos;
	let contPaisesCalidos = 0;
	let contPaisesFrios = 0;
	let acumuladorHabitantes = 0;
	let contadorPaises = 0;
	let promedioPaisCalido;
	let promedioPais;
	let temperaturaMinima;
	let banderaMinima = true;
	let nombrePaisMinimo;
	let mensajeMasHabitantes;


	for (i = 0; i < 10; i++) {
		continente = prompt("Que desea ingresar? ('asia', 'africa', 'europa', 'america', u 'oceania')");
		while (continente != "africa" && continente != "asia" && continente != "oceania" && continente != "europa" && continente != "america") {
			continente = prompt("Que continente ingresar?  ('asia', 'africa', 'europa' u 'oceania')");
		}
		pais = prompt("Que pais quiere ingresar?");

		habitantes = parseInt(prompt("Ingrese la cantidad de habitantes? (en millones, ejemplo 1 = 1000000)."));
		while (isNaN(habitantes) || habitantes > 7001 || habitantes < 1) {
			habitantes = parseInt(prompt("Ingrese habitantes (entre 1 y 7000)."));
		}

		switch (continente) {
			case "europa":
				nivelPobreza = prompt("Que nivel de Pobreza desea ingresar?  ('rico', 'millonario' )");
				while (nivelPobreza != "millonario" && nivelPobreza != "rico") {
					nivelPobreza = prompt("Que nivel de pobreza desea ingresar?  ('rico', 'millonario' )");
				}
				break;
			default:
				nivelPobreza = prompt("Que nivel de Pobreza desea ingresar?  ('rico', 'pobre', 'millonario' )");
				while (nivelPobreza != "millonario" && nivelPobreza != "pobre" && nivelPobreza != "rico") {
					nivelPobreza = prompt("Que nivel de Pobreza desea ingresar?  ('rico', 'pobre', 'millonario' )");
				}
		}
		temperatura = parseInt(prompt("Ingrese la temperatura (entre -50 y 50 grados)."));
		while (isNaN(temperatura) || temperatura > 51 || temperatura < -51) {
			temperatura = parseInt(prompt("Ingrese temperatura (entre 50 y -50)."));
		}
	}


	if (temperatura % 2 == 0) {
		temperaturaPar = temperaturaPar + 1;
	}

	if (temperatura % 2 != 0 && continente == "europa") {
		temperaturaImpar = temperaturaImpar + 1;
	}

	if (banderaPaisMenosHabitantes == true) {
		paisMenos = habitantes;
		nombrePaisMenos = pais;
		banderaPaisMenosHabitantes = false;
	}
	else if (paisMenos > habitantes) {
		paisMenos = habitantes;
		nombrePaisMenos = pais;
	}

	if (banderaMinima == true) {
		temperaturaMinima = temperatura;
		nombrePaisMinimo = pais;
		banderaMinima = false;
	}
	else if (temperaturaMinima > temperatura) {
		temperaturaMinima = temperatura;
		nombrePaisMinimo = pais;
	}

	if (temperatura > 39) {
		contPaisesCalidos = contPaisesCalidos + 1;
	} else if (temperatura < 0) {
		contPaisesFrios = contPaisesFrios + 1;
	}

	contadorPaises = contadorPaises + 1;

	acumuladorHabitantes = acumuladorHabitantes + habitantes;





	switch (continente) {
		case "africa":
			acumuladorAfrica = acumuladorAfrica + habitantes;
			break;
		case "america":
			acumuladorAmerica = acumuladorAmerica + habitantes;
			break;
		case "asia":
			acumuladorAsia = acumuladorAsia + habitantes;
			break;
		case "europa":
			acumuladorEuropa = acumuladorEuropa + habitantes;
			break;
		case "oceania":
			acumuladorOceania = acumuladorOceania + habitantes;
			break;
	}


	if (acumuladorAfrica > masHabitantes) {
		masHabitantes = acumuladorAfrica;
        mensajeMasHabitantes = "El continente con mas habitantes es Africa y tiene: " + masHabitantes + " habitantes";
	}
	if (acumuladorAmerica > masHabitantes) {
		masHabitantes = acumuladorAmerica;
		mensajeMasHabitantes = "El continente con mas habitantes es America y tiene: " + masHabitantes + " habitantes";
	}
	if (acumuladorAsia > masHabitantes) {
		masHabitantes = acumuladorAsia;
		mensajeMasHabitantes = "El continente con mas habitantes es Asia y tiene: " + masHabitantes + " habitantes";
	}
	if (acumuladorEuropa > masHabitantes) {
		masHabitantes = acumuladorEuropa;
		mensajeMasHabitantes = "El continente con mas habitantes es Europa y tiene: " + masHabitantes + " habitantes";
	}
	if (acumuladorOceania > masHabitantes) {
		masHabitantes = acumuladorOceania;
		mensajeMasHabitantes = "El continente con mas habitantes es Ocenia y tiene: " + masHabitantes + " habitantes";
	}


	promedioPais = acumuladorHabitantes / contadorPaises;

	promedioPaisCalido = acumuladorHabitantes / contPaisesCalidos;

	console.log(mensajeMasHabitantes);
	console.log("Las temperaturas pares ingresadas han sido un total de " + temperaturaPar);
	console.log("Las temperaturas impares en europa ingresadas han sido un total de " + temperaturaImpar);
	console.log("El nombre del pais con menos habitantes es: " + paisMenos);
	console.log("La cantidad de paises que tienen mas de 40 grados han sido: " + contPaisesCalidos);
	console.log("La cantidad de paises con menos de 0 grados han sido en total: "+ contPaisesFrios);
	console.log("El promedio de habitantes sobre paises fue de " + promedioPais);
	console.log("El promedio de habitantes sobre paises que tienen mas de 40 grados fueron en total: " + promedioPaisCalido);
	console.log("La temperatura minima ingresada fue de " + temperaturaMinima + " y esta en " + nombrePaisMinimo);

}
