function mostrar() {
	let numeroIngresado;

	numeroIngresado = parseInt(prompt("Que numero queres verificar si es primo?"));

	if (numeroIngresado < 2) {
		console.log(numeroIngresado + " no es primo.");
		return;
	}
	for (let i = 2; i <= numeroIngresado / 2; i++) {
		if (numeroIngresado % i === 0) {
			console.log(numeroIngresado + " no es primo.");
		}
	}
	alert(numeroIngresado + " es primo.");

}//FIN DE LA FUNCIÓN