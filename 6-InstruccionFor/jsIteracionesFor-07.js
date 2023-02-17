function mostrar() {

	let numero = parseInt(prompt("Ingrese un número:"));
	let mensaje = "Los divisores son: ";
	let cantidadDivisores = 0;

	for (let i = 1; i <= numero; i++) {
		if (numero % i === 0) {
			mensaje = mensaje + i + ", ";
			cantidadDivisores = cantidadDivisores + 1;
		}
	}


	mensaje = mensaje + "<br> Cantidad de divisores encontrados: " + cantidadDivisores;
	document.write(mensaje);



}//FIN DE LA FUNCIÓN