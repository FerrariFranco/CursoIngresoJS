/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar() {
	//declarar contadores y variables 
	var respuesta = "si";
	var numeroIngresado;
	var sumaNegativos = 0;
	var sumaPositivos = 0;
	var cantidadPositivos = 0;
	var cantidadNegativos = 0;
	var cantidadCeros = 0;
	var cantidadPares = 0;
	var promedioPositivos;
	var promedioNegativos;
	var diferencia;

	while (respuesta == "si" || respuesta == "SI" || respuesta == "Si" ||respuesta == "sI") {
		numeroIngresado = parseInt(prompt("Ingrese un número:"));

		if (numeroIngresado > 0) {
			sumaPositivos += numeroIngresado;
			cantidadPositivos = cantidadPositivos + 1;
		}
		else if (numeroIngresado < 0) {
			sumaNegativos += numeroIngresado;
			cantidadNegativos = cantidadNegativos + 1;
		}
		else {
			cantidadCeros = cantidadCeros + 1;
		}

		if (numeroIngresado % 2 == 0) {
			cantidadPares = cantidadPares + 1;
		}

		respuesta = prompt("¿Desea continuar ingresando números? (coloque si)");
	}

	promedioPositivos = sumaPositivos / cantidadPositivos;
	promedioNegativos = sumaNegativos / cantidadNegativos;
	diferencia = sumaPositivos - sumaNegativos;

	document.write("La suma de negativos es: " + sumaNegativos + "<br>");
	document.write("La suma de positivos es: " + sumaPositivos + "<br>");
	document.write("La cantidad de positivos es: " + cantidadPositivos + "<br>");
	document.write("La cantidad de negativos es: " + cantidadNegativos + "<br>");
	document.write("La cantidad de ceros es: " + cantidadCeros + "<br>");
	document.write("La cantidad de números pares es: " + cantidadPares + "<br>");
	document.write("El promedio de positivos es: " + promedioPositivos + "<br>");
	document.write("El promedio de negativos es: " + promedioNegativos + "<br>");
	document.write("La diferencia es " + diferencia);

}