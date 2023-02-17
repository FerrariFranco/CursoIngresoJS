function mostrar() {

	let corte
	let cantidadDeCiclos

	cantidadDeCiclos = parseInt(prompt("Cuantas veces queres repetir el ciclo?"))
	for (i = cantidadDeCiclos; i > -1; i--) {
		corte = prompt("Desea interrumpir el ciclo?")
		if (corte == "si" || corte == "SI" || corte == "sI") {
			break;

		}
	}
}

//FIN DE LA FUNCIÓN