
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

		precio = parseInt(prompt("Ingrese precio."));
		while (isNaN(precio) || precio > 300 || precio < 100) {
			precio = parseInt(prompt("Ingrese precio (entre 100 y 300)."));
		}

		cantidad = parseInt(prompt("Ingrese Cantidad."));
		while (isNaN(cantidad) || cantidad > 1000 || cantidad < 0) {
			cantidad = parseInt(prompt("Ingrese Cantidad (entre 0 y 1000)."));
		}


		switch (producto) {
			case "jabon":
			case "Jabon":
				tipoProducto = "Jabon";
				contJab = contJab + 1;
				acumJab = acumJab + cantidad;
				break;
			case "alcohol":
			case "Alcohol":
				tipoProducto = "Alcohol"
				contAlc = contAlc + 1;
				acumAlc = acumAlc + cantidad;
				break;
			case "barbijo":
			case "Barbijo":
				tipoProducto = "Barbijo"
				contBarbijo = contBarbijo + 1;
				acumBar = acumBar + cantidad;
				break;
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
	if (acumAlc > acumBar && acumAlc > acumJab) {
		promedioMasUnidades = acumAlc / contAlc;
		mensajeMasUnidades = "El producto con mas unidades compradas fue Alcohol y compró un promedio de " + promedioMasUnidades + " unidades";
	}
	else if (acumBar > acumAlc && acumBar > acumJab) {
		promedioMasUnidades = acumBar / contBarbijo;
		mensajeMasUnidades = "El producto con mas unidades compradas fue Barbijo y compró un promedio de " + promedioMasUnidades + " unidades";
	}
	else if (acumJab > acumAlc && acumJab > acumBar) {
		promedioMasUnidades = acumJab / contJab;
		mensajeMasUnidades = "El producto con mas unidades compradas fue Jabon y compró un promedio de " + promedioMasUnidades + " unidades";
	}
	else {
		promedioMasUnidades = 0;
		mensajeMasUnidades = "Ha ingresado cantidades iguales en 2 o mas productos!"

	}


	alert("El mas barato de los alcoholes costó: " + alcBarato + ", su fabricante fue: " + alcBaratoFab + ", y compro " + alcBaratoCant + " unidades!");
	alert(mensajeMasUnidades);
	alert("Compro " + acumJab + " unidades de jabon");




	/*
	---------------------------------------------------------------------------------------------------------------------------
	
	
	let producto;
	
	let kilo;
	let precio;
	let procedencia;
	let acumLimpieza = 0;
	let acumComestible = 0;
	let acumOtros = 0;
	let nombre;
	let tipoProducto;
	let comestiblePesado;
	let elaboradoBarato;
	let nombreElaboradoBarato
	let productoMasCaro;
	let nombreMasCaro;
	let comestiblePesadoNombre;
	let bandera = true;
	let banderaPesado = true;
	let banderaCaro = true;
	let contLimpieza = 0;
	let contComestible = 0;
	let contOtros = 0;
	let contElaborado = 0;
	let contadorTotal = 0;
	let elaboradosSobreTotal;
	let promedioMasUnidades;
	let mensajeMasUnidades;
	let promedioComestible;
	let promedioLimpieza;
	let promedioOtro;
	let respuesta = "si";




	while (respuesta == "si" || respuesta == "SI" || respuesta == "Si" || respuesta == "sI") {
		producto = prompt("Que desea comprar? ('comestible', 'limpieza' u 'otro')");
		while (producto != "limpieza" & producto != "comestible" && producto != "otros") {
			producto = prompt("Que producto comprar? (comestible, limpieza u otro)");
		}

		nombre = prompt("Ingrese nombre del producto");

		precio = parseInt(prompt("Ingrese precio."));
		while (isNaN(precio) || precio > 1001 || precio < 0) {
			precio = parseInt(prompt("Ingrese precio (entre 0 y 1000)."));
		}

		kilo = parseInt(prompt("Ingrese el peso (hasta 30 kilos)."));
		while (isNaN(kilo) || kilo > 0 || kilo < 31) {
			kilo = parseInt(prompt("Ingrese el peso (entre 0 y 30)."));
		}

		procedencia = prompt("De que procedencia? ('importado', 'nacional' o 'elaborado')")
		while (procedencia != "importado" && procedencia != "nacional" && procedencia != "elaborado") {
			procedencia = prompt("De que procedencia? ('importado', 'nacional' o 'elaborado')")
		}

		switch (producto) {
			case "limpieza":
				tipoProducto = "Limpieza";
				contLimpieza = contLimpieza + 1;
				acumLimpieza = acumLimpieza + precio;
				break;
			case "comestible":
				tipoProducto = "Comestible"
				contComestible = contComestible + 1;
				acumComestible = acumComestible + precio;
				break;
			case "otros":
				tipoProducto = "Otros"
				contOtros = contOtros + 1;
				acumOtros = acumOtros + precio;
				break;
		}

		switch (procedencia) {
			case "elaborado":
				contElaborado = contElaborado + 1;
				break;
		}

		if (tipoProducto == "Comestible") {
			if (bandera == true) {
				comestiblePesado = kilo;
				comestiblePesadoNombre = nombre;
				bandera = false;
			}
			else if (comestiblePesado > kilo) {
				comestiblePesado = kilo;
				comestiblePesadoNombre = nombre;
			}

		}

		if (banderaCaro == true) {
			productoMasCaro = precio;
			nombreMasCaro = nombre;
			banderaCaro = false;
		}
		else if (productoMasCaro < precio) {
			productoMasCaro = precio;
			nombreMasCaro = nombre;

		}

		if (procedencia == "elaborado") {
			if (banderaPesado == true) {
				elaboradoBarato = precio;
				nombreElaboradoBarato = nombre;
				banderaPesado = false;
			}
			else if (elaboradoBarato > precio) {
				elaboradoBarato = precio;
				nombreElaboradoBarato = nombre;
			}

		}

		contadorTotal = contadorTotal + 1;

		respuesta = prompt("Desea continuar? (coloque Si)");
	}

	if (contComestible > contOtros && contComestible > contLimpieza) {
		promedioMasUnidades = contComestible / contComestible;
		mensajeMasUnidades = "El tipo de producto mas solicitado fue Comestible y compró un promedio de " + promedioMasUnidades + " unidades";
	}
	else if (contOtros > contComestible && contOtros > contLimpieza) {
		promedioMasUnidades = contOtros / contOtros;
		mensajeMasUnidades = "El tipo de producto mas solicitado fue Otros y compró un promedio de " + promedioMasUnidades + " unidades";
	}
	else if (contLimpieza > contComestible && contLimpieza > contOtros) {
		promedioMasUnidades = contLimpieza / contLimpieza;
		mensajeMasUnidades = "El tipo de producto mas solicitado fue Limpieza y compró un promedio de " + promedioMasUnidades + " unidades";
	}
	else {
		promedioMasUnidades = 0;
		mensajeMasUnidades = "Ha ingresado cantidades iguales en 2 o mas productos!"

	}

	elaboradosSobreTotal =  (contadorTotal / contElaborado) * 100;

	promedioComestible = acumComestible / contComestible;
	promedioLimpieza = acumLimpieza / contLimpieza;
	promedioOtro = acumOtros / contOtros;

	console.log("El mas pesado de los Comestible pesa: " + comestiblePesado + ", su Nombre fue: " + comestiblePesadoNombre);
	console.log("El producto mas caro es " + nombreMasCaro + " y costó " + productoMasCaro);
	console.log("El elaborado mas barato fue " + nombreElaboradoBarato + " y costó " + elaboradoBarato);
	console.log(mensajeMasUnidades);
	console.log(elaboradosSobreTotal + "% es el porcentaje de productos elaborados sobre el total de productos");
	console.log("El promedio de precio por cada tipo ingresado es, para Comestibles: $" + promedioComestible + ", para Limpieza: $" + promedioLimpieza + ", y para otros fue: $" + promedioOtro);

*/


}

