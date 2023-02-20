
function mostrar() {

	let producto;
	let cantidad;
	let precio;
	let marca;
	let cantidadXPrecio
	let fabrica;
	let tipoProducto;
	let jabonCaro;
	let banderaJabon;
	let cantJab;
	let fabJab;
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
		if (producto == "Alcohol" || producto == "alcohol") {
			tipoProducto == "Alcohol"
		}
		if (producto == "barbijo" || producto == "Barbijo") {
			tipoProducto = "Barbijo"
		}

		precio = parseInt(prompt("Ingrese precio."));
		while (isNaN(precio) || precio > 300 || precio < 100) {
			precio = parseInt(prompt("Ingrese precio (entre 100 y 300)."));
		}
		cantidad = parseInt(prompt("Ingrese Cantidad."));
		while (isNaN(cantidad) || cantidad > 1000 || cantidad < 0) {
			cantidad = parseInt(prompt("Ingrese Cantidad (entre 0 y 1000)."));
		}

		marca = prompt("Ingrese marca");

		fabrica = prompt("Ingrese fabricante")



	}


	if (banderaJabon == true) {
		if (tipoProducto == "Jabon") {
			cantJab = cantidad;
			fabJab = fabrica
			banderaJabon = false;
		}
	}

	else if (tipoProducto == "Jabon") {
		if (jabonCaro < precio) {
			cantJab = cantidad;
			fabJab = fabrica;
		}
	}

}
//ACUMULADOR DE UNIDADES DE TIPODEPRODUCTO???