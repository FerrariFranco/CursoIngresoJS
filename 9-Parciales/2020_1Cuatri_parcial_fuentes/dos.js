function mostrar() {

  let tipoProducto;
  let producto;
  let cantidad;
  let precio;
  let acumPrecioCal = 0;
  let acumPrecioArena = 0;
  let acumPrecioCemento = 0;
  let acumCantidadCal = 0;
  let acumCantidadArena = 0;
  let acumCantidadCemento = 0;
  let contCal = 0;
  let contArena = 0;
  let contCemento = 0;
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
    switch (producto) {
      case "cal":
      case "Cal":
        tipoProducto = "Cal";
        contCal = contCal + 1;
        break;
      case "Arena":
      case "arena":
        tipoProducto = "Arena"
        contArena = contArena + 1;
        break;
      case "Cemento":
      case "cemento":
        tipoProducto = "Cemento"
        contCemento = contCemento + 1;
        break;
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

    switch (tipoProducto) {
      case "Cal":
        acumCantidadCal = acumCantidadCal + cantidad;
        break;
      case "Arena":
        acumCantidadArena = acumCantidadArena + cantidad;
        break;
      case "Cemento":
        acumCantidadCemento = acumCantidadCemento + cantidad;
        break;
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


  if (acumCantidadCal > acumCantidadArena && acumCantidadCal > acumCantidadCemento) {
    mensajeMasbolsas = "El producto con mas bolsas compradas fue Cal y compro: " + acumCantidadCal + " bolsas";
  }
  else if (acumCantidadArena > acumCantidadCal && acumCantidadArena > acumCantidadCemento) {
    mensajeMasbolsas = "El producto con mas bolsas compradas fue Arena y compro: " + acumCantidadArena + " bolsas";
  }
  else if (acumCantidadCemento > acumCantidadCal && acumCantidadCemento > acumCantidadArena) {
    mensajeMasbolsas = "El producto con mas bolsas compradas fue Cemento y compro: " + acumCantidadCemento + " bolsas";
  }
  else {
    mensajeMasbolsas = "Ha ingresado cantidad de bolsas iguales en 2 o mas  tipos productos!"

  }

  alert("El total en bruto a pagar es de: " + precioTotal + "$, y " + precioDesc);
  alert(mensajeMasbolsas);
  alert("Y el tipo de producto mas caro fue: " + tipoCaro + " y costo " + masCaro + "$ por bolsa");
}
