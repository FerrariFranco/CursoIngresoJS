function mostrar() {

	/*
		let corte;
		let cantidadDeCiclos;
	
		cantidadDeCiclos = Infinity;
		for (i = 0; i < cantidadDeCiclos; i++) {
			corte = prompt("Desea interrumpir el ciclo? coloque 9.")
			console.log(i);
			if (corte == "9") {
				break;
	
			}
		}
	*/



	let notaIngresada;
	let sexoIngresado;
	let notaBaja;
	let banderaMasBaja = true;
	let sexoBajo;
	let desaprobados = 0;
	let notaAcum = 0;
	let excelentes = 0;
	let mensajeUno;
	let mensajeDos = "";
	let promedio;


	for (i = 0; i < 7; i++) {

		notaIngresada = parseInt(prompt("Ingrese la nota"));
		while (!Number.isInteger(notaIngresada) || notaIngresada > 10 || notaIngresada < 0) {
			notaIngresada = parseInt(prompt("Ingrese valida la nota"));


		}
		sexoIngresado = prompt("Ingrese sexo (b, m, f)");
		while (sexoIngresado != "M" && sexoIngresado != "F" && sexoIngresado != "f" && sexoIngresado != "m" && sexoIngresado != "b" && sexoIngresado != "B") {
			sexoIngresado = prompt("Ingrese sexo valido (b, m, f)");

		}
		if (sexoIngresado == "M" || sexoIngresado == "m") {
			sexoIngresado = "Masculino";
		}
		if (sexoIngresado == "f" || sexoIngresado == "F") {
			sexoIngresado = "Femenino";
		}
		if (sexoIngresado == "b" || sexoIngresado == "B") {
			sexoIngresado = "No binario";
		}

		if (banderaMasBaja == true) {
			notaBaja = notaIngresada;
			sexoBajo = sexoIngresado;
			banderaMasBaja = false;
		}

		else if (notaIngresada < notaBaja) {
			notaBaja = notaIngresada;
			sexoBajo = sexoIngresado;
		}


		if (notaIngresada < 4) {
			desaprobados = desaprobados + 1;
		}


		if ((sexoIngresado == "Masculino") && notaIngresada >= 6) {
			excelentes = excelentes + 1
			mensajeDos = ", y los alumnos masculinos que sacaron mas de 6 han sido en total " + excelentes;
		}


		notaAcum = notaAcum + notaIngresada;
	}


	promedio = notaAcum / i;

	mensajeUno = "El promedio total de notas es " + promedio + ", la nota de la persona mas baja fue: " + notaBaja + (" y fue de un " + sexoBajo + (", la cantidad total de desaprobados fue de ") + desaprobados + mensajeDos);

	alert(mensajeUno);
}//FIN DE LA FUNCIÓN