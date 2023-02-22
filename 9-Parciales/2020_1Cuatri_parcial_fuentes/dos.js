function mostrar() {

  let tipoProducto;
  let producto;
  let cantidad;
  let precio;
  let acumCal = 0;
  let acumArena = 0;
  let acumCemen = 0;
  let contCal = 0;
  let contArena = 0;
  let contCemen = 0;
  let acumCantidad = 0;
  let precioTotal = 0;
  let descuento;
  let precioDesc;
  let mensajeMasbolsas;
  let bandera = true;
  let masCaro;
  let tipoCaro;
  let respuesta = "si";




  while (respuesta == "si" || respuesta == "SI" || respuesta == "Si" || respuesta == "sI") {
    producto = prompt("Que desea comprar?");
    while (producto != "cal" && producto != "Cal" && producto != "arena" && producto != "Arena" && producto != "Cemento" && producto != "cemento") {
      producto = prompt("Que producto comprar?");
    }
    if (producto == "cal" || producto == "Cal") {
      tipoProducto = "Cal";
      contCal = contCal + 1;
    }
    if (producto == "arena" || producto == "Arena") {
      tipoProducto = "Arena"
      contArena = contArena + 1;
    }
    if (producto == "Cemento" || producto == "cemento") {
      tipoProducto = "Cemento"
      contCemen = contCemen + 1;
    }

    precio = parseInt(prompt("Ingrese precio."));
    while (isNaN(precio) || precio < 0) {
      precio = parseInt(prompt("Ingrese precio (mayor a 0)."));
    }

    cantidad = parseInt(prompt("Ingrese Cantidad."));
    while (isNaN(cantidad) || cantidad < 0) {
      cantidad = parseInt(prompt("Ingrese Cantidad (mayor a 0)."));
    }

    acumCantidad = acumCantidad + cantidad;

    if (tipoProducto == "Cal") {
      acumCal = acumCal + cantidad;
    }
    if (tipoProducto == "Arena") {
      acumArena = acumArena + cantidad;
    }
    if (tipoProducto == "Cemento") {
      acumCemen = acumCemen + cantidad;
    }



    precioTotal = cantidad * precio + (precioTotal);


    if (bandera == true) {
      masCaro = precio;
      tipoCaro = tipoProducto;
      bandera = false;
    }
    else if (masCaro < precio) {
      masCaro = precio;
      tipoCaro = tipoProducto;
    }


    respuesta = prompt("Desea continuar? (coloque Si)");
  }


  if (acumCantidad >= 10) {
    descuento = 15;
    precioDesc = precioTotal - precioTotal * (descuento / 100);
    precioDesc = "El precio con descuento es: " + precioDesc + "$";
  } else if (acumCantidad >= 30) {
    descuento = 25;
    precioDesc = precioTotal - precioTotal * (descuento / 100);
    precioDesc = "El precio con descuento es: " + precioDesc + "$";
  } else {
    precioDesc = "No tiene descuento";
  }


  if (acumCal > acumArena && acumCal > acumCemen) {
    mensajeMasbolsas = "El producto con mas bolsas compradas fue Cal y compro: " + acumCal + " bolsas";
  }
  else if (acumArena > acumCal && acumArena > acumCemen) {
    mensajeMasbolsas = "El producto con mas bolsas compradas fue Arena y compro: " + acumArena + " bolsas";
  }
  else if (acumCemen > acumCal && acumCemen > acumArena) {
    mensajeMasbolsas = "El producto con mas bolsas compradas fue Cemento y compro: " + acumCemen + " bolsas";
  }
  else {
    mensajeMasbolsas = "Ha ingresado cantidad de bolsas iguales en 2 o mas  tipos productos!"

  }

  alert("El total en bruto a pagar es de: " + precioTotal + "$, y " + precioDesc);
  alert(mensajeMasbolsas);
  alert("Y el tipo de producto mas caro fue: " + tipoCaro + " y costo " + masCaro + "$ por bolsa");
}
