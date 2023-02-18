/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso() {
	//definicion de variables
	let edadIngresada;
	let sexoIngresado;
	let estadoCivilIngresado;
	let sueldoB;
	let legajo;
	let nacionalidad;


	edadIngresada = parseInt(prompt("Ingrese su edad:"));
	while (isNaN(edadIngresada) || edadIngresada <= 18 || edadIngresada >= 90 || edadIngresada == undefined) {
		edadIngresada = parseInt(prompt("Ingrese una edad valida."));

	}
	sexoIngresado = prompt("Ingrese su sexo (F; M)");
	while (sexoIngresado != "M" && sexoIngresado != "F") {
		sexoIngresado = prompt("Ingrese correctamente su sexo (F; M)");
	}
	estadoCivilIngresado = prompt("Ingrese su estado civil, 1-para soltero; 2-para casado; 3-para divorciados; 4-para viudos");
	while (estadoCivilIngresado != "1" && estadoCivilIngresado != "2" && estadoCivilIngresado != "3" && estadoCivilIngresado != "4") {
		estadoCivilIngresado = estadoCivilIngresado = prompt("Ingrese su estado civil, 1-para soltero; 2-para casado; 3-para divorciados; 4-para viudos");
	}
	sueldoB = parseInt(prompt("Ingrese su sueldo bruto (no menos de 8000)"));
	while (isNaN(sueldoB || sueldoB <= 8000 || sueldoB >= 600000)) {
		sueldoB = parseInt(prompt("Ingrese sueldo bruto valido! (entre 8000 y 600000)"))
	}
	legajo = parseInt(prompt("Ingrese su legajo"));
	while (legajo < 999 || legajo > 10000) {
		legajo = parseInt(prompt("Ingrese su legajo"));
	}
	nacionalidad = prompt("Ingrese su nacionalidad (A -si es argentino; E -si es extranjero; N -si es nacionalizado)");
	while (nacionalidad != "A" && nacionalidad != "N" && nacionalidad != "E") {
		nacionalidad = prompt("Ingrese su nacionalidad (A -si es argentino; E -si es extranjero; N -si es nacionalizado)");
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



	document.getElementById("txtIdEdad").value = edadIngresada;
	document.getElementById("txtIdSexo").value = sexoIngresado;
	document.getElementById("txtIdEstadoCivil").value = estadoCivilIngresado;
	document.getElementById("txtIdSueldo").value = ("$") + sueldoB;
	document.getElementById("txtIdLegajo").value = legajo;
	document.getElementById("txtIdNacionalidad").value = nacionalidad;
}
