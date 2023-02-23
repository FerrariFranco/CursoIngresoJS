
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
    let jabCaro;
    let jabCaroCant;
    let jabCaroFab;
    let banderaJab = true;
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


        switch (tipoProducto) {
            case "Jabon":
                acumJab = acumJab + cantidad;
                break;
            case "Alcohol":
                acumAlc = acumAlc + cantidad;
                break;
            case "Barbijo":
                acumBar = acumBar + cantidad;
                break;
        }

        marca = prompt("Ingrese marca");

        fabrica = prompt("Ingrese fabricante");



        if (tipoProducto == "Jabon") {
            if (banderaJab == true) {
                jabCaro = precio;
                jabCaroCant = cantidad;
                jabCaroFab = fabrica;
                banderaJab = false;
            }
            else if (tipoProducto == "Jabon" && jabCaro < precio) {
                jabCaro = precio;
                jabCaroCant = cantidad;
                jabCaroFab = fabrica;
            }

        }

    }
    if (acumAlc > acumBar && acumAlc > acumJab) {
        promedioMasUnidades = acumAlc / contAlc;
        mensajeMasUnidades = "El producto con mas unidades compradas fue Alcohol y compró un promedio de " + promedioMasUnidades + " unidades por compra";
    }
    else if (acumBar > acumAlc && acumBar > acumJab) {
        promedioMasUnidades = acumBar / contBarbijo;
        mensajeMasUnidades = "El producto con mas unidades compradas fue Barbijo y compró un promedio de " + promedioMasUnidades + " unidades por compra";
    }
    else if (acumJab > acumAlc && acumJab > acumBar) {
        promedioMasUnidades = acumJab / contJab;
        mensajeMasUnidades = "El producto con mas unidades compradas fue Jabon y compró un promedio de " + promedioMasUnidades + " unidades por compra";
    }
    else {
        promedioMasUnidades = 0;
        mensajeMasUnidades = "Ha ingresado cantidades iguales en 2 o mas productos!"

    }


    alert("El mas barato de los jabones costó: " + jabCaro + ", su fabricante fue: " + jabCaroFab + ", y compro " + jabCaroCant + " unidades!");
    alert(mensajeMasUnidades);
    alert("Compro " + acumBar + " unidades de barbijo");


}
//ACUMULADOR DE UNIDADES DE TIPODEPRODUCTO???