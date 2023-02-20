
function mostrar() {
	let producto;
	let cantidad;
	let precio;
	let marca;
	let fabrica;
	let tipoProducto;
	let jabonCaro;
	let banderaJabon;
	let banderaUnidades;
	let contBarbijo;


	for (i = 0; i < 5; i++) {
		producto = prompt("Que desea comprar?");
		while (producto != "Jabon" && producto != "jabon" && producto != "Alcohol" && producto != "alcohol" && producto != "Barbijo" && producto != "barbijo") {
			producto = prompt("Que producto comprar?");
		}
		if (producto == "jabon" || producto == "Jabon") {
			tipoProducto = "Jabon";
		}
	}

}
