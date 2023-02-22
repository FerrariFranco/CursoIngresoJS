
function mostrar() {

	let producto;
	let cantidad;
	let precio;
	let marca;
	let acumJab = 0;
	let acumAlc = 0;
	let acumBar = 0;
	let fabrica;
	let tipoProducto;
	let alcBarato;
	let alcBaratoCant;
	let alcBaratoFab;
	let banderaAlc = true;
	let contJab = 0;
	let contAlc = 0;
	let contBarbijo = 0;
	let promedioMasUnidades;
	let mensajeMasUnidades;


	for (i = 0; i < 5; i++) {
		producto = prompt("Que desea comprar?");
		while (producto != "Jabon" && producto != "jabon" && producto != "Alcohol" && producto != "alcohol" && producto != "Barbijo" && producto != "barbijo") {
			producto = prompt("Que producto comprar?");
		}
		if (producto == "jabon" || producto == "Jabon") {
			tipoProducto = "Jabon";
			contJab = contJab + 1;
		}
		if (producto == "Alcohol" || producto == "alcohol") {
			tipoProducto = "Alcohol"
			contAlc = contAlc + 1;
		}
		if (producto == "barbijo" || producto == "Barbijo") {
			tipoProducto = "Barbijo"
			contBarbijo = contBarbijo + 1;
		}

		precio = parseInt(prompt("Ingrese precio."));
		while (isNaN(precio) || precio > 300 || precio < 100) {
			precio = parseInt(prompt("Ingrese precio (entre 100 y 300)."));
		}

		cantidad = parseInt(prompt("Ingrese Cantidad."));
		while (isNaN(cantidad) || cantidad > 1000 || cantidad < 0) {
			cantidad = parseInt(prompt("Ingrese Cantidad (entre 0 y 1000)."));
		}

		if (tipoProducto == "Jabon") {
			acumJab = acumJab + cantidad;
		}
		if (tipoProducto == "alcohol") {
			acumAlc = acumAlc + cantidad;
		}
		if (tipoProducto == "Barbijo") {
			acumBar = acumBar + cantidad;
		}

		marca = prompt("Ingrese marca");

		fabrica = prompt("Ingrese fabricante");



		if (tipoProducto == "Alcohol") {
			if (banderaAlc == true) {
				alcBarato = precio;
				alcBaratoCant = cantidad;
				alcBaratoFab = fabrica;
				banderaAlc = false;
			}
			else if (tipoProducto == "Alcohol" && alcBarato > precio) {
				alcBarato = precio;
				alcBaratoCant = cantidad;
				alcBaratoFab = fabrica;
			}

		}

	}
	if (acumAlc > acumJab) {
		promedioMasUnidades = acumAlc / contAlc;
		mensajeMasUnidades = "El producto con mas unidades compradas fue Alcohol y compró un promedio de " + promedioMasUnidades + " unidades";
	}

	else if (acumJab > acumBar) {
		promedioMasUnidades = acumJab / contJab;
		mensajeMasUnidades = "El producto con mas unidades compradas fue Jabon y compró un promedio de " + promedioMasUnidades + " unidades";
	}
	else {
		promedioMasUnidades = acumBar / contBarbijo;
		mensajeMasUnidades = "El producto con mas unidades compradas fue Barbijo y compró un promedio de " + promedioMasUnidades + " unidades";
	}

	alert("El mas barato de los alcoholes costó: " + alcBarato + ", su fabricante fue: " + alcBaratoFab + ", y compro " + alcBaratoCant + " unidades!");
	alert(mensajeMasUnidades);
	alert("Compro " + acumJab + " unidades de jabon");


}
//ACUMULADOR DE UNIDADES DE TIPODEPRODUCTO???