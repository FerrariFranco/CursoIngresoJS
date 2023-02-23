function mostrar() {

  let tipoProducto;
  let producto;
  let cantidad;
  let precio;
  let acumPrecioArena = 0;
  let acumCantidadCal = 0;
  let acumCantidadArena = 0;
  let acumCantidadCemento = 0;
  let contCal = 0;
  let contArena = 0;
  let contCemento = 0;
  let acumCantidad = 0;
  let precioTotal = 0;
  let descuento;
  let precioDescuento;
  let promedioArena;
  let bandera = true;
  let masCaro;
  let banderaDos = true;
  let masBarato;
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
        acumPrecioArena = acumPrecioArena + (precio * cantidad);
        break;
      case "Cemento":
        acumCantidadCemento = acumCantidadCemento + cantidad;
        break;
    }


    precioTotal = cantidad * precio + (precioTotal);

    if (bandera == true && tipoProducto == "Cal") {
      masCaro = precio;
      bandera = false;
    }
    else if (masCaro < precio && tipoProducto == "Cal") {
      masCaro = precio;
    }

    if (banderaDos == true && tipoProducto == "Cemento") {
      masBarato = precio;

      bandera = false;
    }
    else if (masBarato > precio && tipoProducto == "Cemento") {
      masBarato = precio;

    }

    respuesta = prompt("Desea continuar? (coloque Si)");
  }


  if (acumCantidad >= 10) {
    descuento = 15;
    precioDescuento = precioTotal - precioTotal * (descuento / 100);
    precioDescuento = "El precio con descuento es: " + precioDescuento + "$";
  } else if (acumCantidad >= 30) {
    descuento = 25;
    precioDescuento = precioTotal - precioTotal * (descuento / 100);
    precioDescuento = "El precio con descuento (es: " + precioDescuento + "$";
  } else {
    precioDescuento = "No tiene descuento";
  }

  promedioArena = acumPrecioArena / contArena;

  console.log("El total en bruto a pagar es de: " + precioTotal + "$, y " + precioDescuento);
  console.log("Se compraron " + acumCantidadArena + " bolsas de arena, y un promedio por compra de $" + promedioArena);
  console.log("La bolsa de cal mas cara costo: $ " + masCaro + " y la bolsa de arena mas barata costo: $" + masBarato);
}
