// Bienvenidos.
// En el ingreso a un viaje en avión nos solicitan nacionalidad, nacionalidad , edad, sexo("f" o "m") y
// estado civil("soltero", "casado" o "viudo")y temperatura corporal.
// a) la Nacionalidad de la persona con mas temperatura.
// b) Cuantos mayores de edad( más de 17) estan solteros
// c) La cantidad de Mujeres que hay solteras o viudas.
// d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
// e) El promedio de edad entre las mujeres casadas.



function mostrar() {
	/*	let edadIngresada;
		let sexoIngresado;
		let estadoCivilIngresado;
		let temperatura;
		let nacionalidad;
		let respuesta = "si";
		let bandera = true;
		let maxTemperatura;
		let nacionalidadMaxTemperatura;
		let contMayores = 0;
		let cantMujeresSolterasOViudas = 0;
		let acumCasadas = 0;
		let contCasadas = 0;
		let contadorViejos = 0;
		let promedioCasadas;
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
					if (sexoIngresado == "Femenino") {
						cantMujeresSolterasOViudas = cantMujeresSolterasOViudas + 1;
	
					}
					if (edadIngresada > 17) {
						contMayores = contMayores + 1;
					}
					break;
				case "2":
					if (sexoIngresado == "Femenino") {
						acumCasadas = acumCasadas + edadIngresada;
						contCasadas = contCasadas + 1;
					}
					break;
				case "3":
					estadoCivilIngresado = "Divorciado/a";
					break;
				case "4":
					if (sexoIngresado == "Femenino") {
						cantMujeresSolterasOViudas = cantMujeresSolterasOViudas + 1;
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
				nacionalidadMaxTemperatura = nacionalidad;
				bandera = false;
			}
			else if (maxTemperatura < temperatura) {
				maxTemperatura = temperatura;
				nacionalidadMaxTemperatura = nacionalidad;
			}
	
			if (edadIngresada >= 60 && temperatura > 38) {
				contadorViejos = contadorViejos + 1;
			}
	
			respuesta = prompt("Desea continuar? (coloque Si)");
		}
	
		promedioCasadas = acumCasadas / contCasadas;
	
		if (isNaN(promedioCasadas)) {
			promedioCasadas = 0;
		}
	
		console.log("La nacionalidad de la persona con mas temperatura es: " + nacionalidadMaxTemperatura + "y tuvo una temperatura de: " + maxTemperatura + "°C");
		console.log("La cantidad de viudos/as que son mayores de edad es: " + contMayores + ". La cantidad de mujeres viudos o Casadases de: " + cantMujeresSolterasOViudas + ". Y la cantidad de personas mayores con mas de 38°C de temperatura corporal es de: " + contadorViejos);
		console.log("El promedio de edad de mujeres casadas es de: " + promedioCasadas);
	*/


	/* -----------------------------------------------------------------------------------------------------------------------------
	Recu 2020 3 bis: /Vacaciones en Familia" 
	Nos ingresan una cantidad indeterminada de estadías de vacaciones, 
	validando los datos ingresados:
	nombre del pasajero titular, 
	destino( “Brasil”, “Caribe” o “Europa”), 
	temporada(“alta”,”baja”,“media”),
	cantidad de pasajeros que viajan.
	Informar:
	a)El destino más elegido.
	b)El nombre del pasajero titular que lleva menos pasajeros.
	c)El promedio de personas, que viajan en temporada alta.
	d)El total de personas que viajaron a Europa.
	 */

	let nombreIngresado;
	let destino;
	let temporada;
	let cantidadPasajeros;
	let contadorBrasil = 0;
	let contadorCaribe = 0;
	let contadorEuropa = 0;
	let promedioPersonas;
	let acumuladorTemporadaAlta = 0;
	let acumuladorPasajerosEuropa = 0;
	let totalPasajeros = 0;
	let banderaMenosPasajeros = true;
	let menosPasajeros;
	let nombreMenosPasajeros;
	let masElegido = 0;
	let mensajeMasElegido;
	let respuesta = "si";

	while (respuesta == "si" || respuesta == "SI" || respuesta == "Si" || respuesta == "sI") {

		nombreIngresado = prompt("Ingrese nombre");
		while (!isNaN(parseInt(nombreIngresado))) {
			nombreIngresado = prompt("Ingrese nombre");
		}

		destino = prompt("Ingrese su destino ('brasil', 'caribe', 'europa')");
		while (destino != "europa" && destino != "caribe" && destino != "brasil") {
			destino = prompt("Ingrese su destino ('brasil', 'caribe', 'europa')");
		}

		temporada = prompt("Ingrese la temporada ('baja', 'media', 'alta')");
		while (temporada != "alta" && temporada != "media" && temporada != "baja") {
			temporada = prompt("Ingrese la temporada ('baja', 'media', 'alta')");
		}

		cantidadPasajeros = parseInt(prompt("Cuantos pasajeros desea ingresar (maximo 15):"));
		while (isNaN(cantidadPasajeros) || cantidadPasajeros <= 0 || cantidadPasajeros >= 15) {
			cantidadPasajeros = parseInt(prompt("Cuantos pasajeros desea ingresar (maximo 15):"));
		}


		switch (destino) {
			case "brasil":
				contadorBrasil = contadorBrasil + 1;
				break;
			case "europa":
				contadorEuropa = contadorEuropa + 1;
				acumuladorPasajerosEuropa = acumuladorPasajerosEuropa + cantidadPasajeros;
				break;
			default:
				contadorCaribe = contadorCaribe + 1;
				break;
		}


		if (temporada == "alta") {
			acumuladorTemporadaAlta = acumuladorTemporadaAlta + cantidadPasajeros;
		}



		if (banderaMenosPasajeros == true) {
			menosPasajeros = cantidadPasajeros;
			nombreMenosPasajeros = nombreIngresado;
			banderaMenosPasajeros = false;
		}
		else if (menosPasajeros > cantidadPasajeros) {
			menosPasajeros = cantidadPasajeros;
			nombreMenosPasajeros = nombreIngresado;
		}


		totalPasajeros = totalPasajeros + cantidadPasajeros;

		respuesta = prompt("Desea continuar? (coloque Si)");

	}




	if (contadorBrasil > masElegido) {
		masElegido = contadorBrasil;
		mensajeMasElegido = "El destino mas elegido fue Brasil  ";
	}
	if (contadorEuropa > masElegido) {
		masElegido = contadorEuropa;
		mensajeMasElegido = "El destino mas elegido fue Europa ";
	}
	if (contadorCaribe > masElegido) {
		masElegido = contadorCaribe;
		mensajeMasElegido = "El destino mas elegido fue Caribe ";
	}





	promedioPersonas = totalPasajeros / acumuladorPasajerosEuropa;


	console.log(mensajeMasElegido);
	console.log("El nombre del pasajero titular que ingreso menos pasajeros es: " + nombreMenosPasajeros);
	console.log("El promedio de personas que viajaron en temporada alta respecto al total fue de: " + promedioPersonas);
	console.log("El total de personas que viajaron a Europa fue de: " + acumuladorPasajerosEuropa);


}
