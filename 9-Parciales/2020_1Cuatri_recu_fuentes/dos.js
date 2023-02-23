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
  let promedioArena;
  let bandera = true;
  let masCaro;
  let tipoCaro;
  let banderaDos = true;
  let masBarato;
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





    switch (tipoProducto) {
      case "Cal":
        acumCal = acumCal + cantidad;
        break;
      case "Arena":
        acumArena = acumArena + cantidad;
        break;
      case "Cemento":
        acumCemen = acumCemen + cantidad;
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
    precioDesc = precioTotal - precioTotal * (descuento / 100);
    precioDesc = "El precio con descuento es: " + precioDesc + "$";
  } else if (acumCantidad >= 30) {
    descuento = 25;
    precioDesc = precioTotal - precioTotal * (descuento / 100);
    precioDesc = "El precio con descuento es: " + precioDesc + "$";
  } else {
    precioDesc = "No tiene descuento";
  }

  promedioArena = acumArena / contArena;

  alert("El total en bruto a pagar es de: " + precioTotal + "$, y " + precioDesc);
  alert("Se compraron " + acumArena + " bolsas de arena, y un promedio por compra de " + promedioArena);
  alert("La bolsa de cal mas cara costo: $ " + masCaro + " y la bolsa de arena mas barata costo: $" + masBarato);
}
