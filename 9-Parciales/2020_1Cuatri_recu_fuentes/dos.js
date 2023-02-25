function mostrar() {

  /* let tipoProducto;
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
 */




  /*Recu 2020 2 bis: /* "El cine"
  De un cine se deben ingresar una cantidad indeterminada 
  de venta de entradas diaria, validando los
  siguientes datos:
  nombre de película, precio, cantidad de entradas, tipo(3D o 4D)
  a)El nombre de la película más cara de tipo 4D.
  b)Informar el precio total de la venta del día.
  c)El nombre de la película con menos cantidad de entradas.
  d)El tipo de pelicula más vista y la cantidad de entradas. 
  e)El nombre de la pelicula más barata en 3D. */

  let nombreIngresado;
  let precio;
  let entradas;
  let tipo;
  let respuesta = "si";
  let banderaMasCara = true;
  let masCara;
  let nombreMasCara;
  let acumuladorPrecio = 0;
  let acumuladorEntradas = 0;
  let ventaTotal = 0;
  let masVista = 0;
  let acumulador3d = 0;
  let acumulador4d = 0;
  let banderaMenosVista = true;
  let nombreMenosVista;
  let menosVista;
  let mensajeMasVista;
  let banderaMasBarata = true;
  let nombreMasBarata;
  let masBarata;

  while (respuesta == "si" || respuesta == "SI" || respuesta == "Si" || respuesta == "sI") {

    nombreIngresado = prompt("ingrese nombre de la pelicula");
    while (!isNaN(parseInt(nombreIngresado))) {
      nombreIngresado = prompt("ingrese nombre de la pelicula");
    }

    precio = parseInt(prompt("Ingrese el valor de la entrada"));
    while (isNaN(precio) || precio > 2501 || precio < 300) {
      precio = parseInt(prompt("Ingrese el valor de la entrada (entre 2500 y 300)"));
    }

    entradas = parseInt(prompt("Ingrese cantidad de entradas"));
    while (isNaN(entradas) || entradas > 21 || entradas < 0) {
      entradas = parseInt(prompt("Ingrese cantidad de entradas (entre 20 y 1)"));
    }

    tipo = prompt("Ingrese '3d' o '4d'");
    while (tipo != "3d" && tipo != "4d") {
      tipo = prompt("ingrese si quiere verla en 3d o 4d ('3d' o '3d')");
    }

    acumuladorPrecio = acumuladorPrecio + precio;

    acumuladorEntradas = acumuladorEntradas + entradas;

    ventaTotal = ventaTotal + (acumuladorEntradas * acumuladorPrecio);

    switch (tipo) {
      case "4d":
        if (banderaMasCara == true) {
          masCara = precio;
          nombreMasCara = nombreIngresado;
          banderaMasCara = false;
        }
        else if (masCara < precio) {
          masCara = precio;
          nombreMasCara = nombreIngresado;
        }
        acumulador4d = acumulador4d + entradas;
        break;
      case "3d":
        if (banderaMasBarata == true) {
          masBarata = precio;
          nombreMasBarata = nombreIngresado;
          banderaMasBarata = false;
        }
        else if (masBarata > precio) {
          masBarata = precio;
          nombreMasBarata = nombreIngresado;
        }
        acumulador3d = acumulador3d + entradas
    }

    if (banderaMenosVista == true) {
      menosVista = entradas;
      nombreMenosVista = nombreIngresado;
      banderaMenosVista = false;
    }
    else if (menosVista > entradas) {
      menosVista = entradas;
      nombreMenosVista = nombreIngresado;
    }

    respuesta = prompt("Desea continuar? (coloque si)")

  }

  if (acumulador3d > masVista) {
    masVista = acumulador3d;
    mensajeMasVista = "El tipo de pelicula mas vista fue 3d";
  }
  if (acumulador4d > masVista) {
    masVista = acumulador4d;
    mensajeMasVista = "El tipo de pelicula mas vista fue 4d";
  }




  console.log("La pelicula 4d mas cara fue: " + nombreMasCara);
  console.log("El total de la venta fue " + ventaTotal + "$");
  console.log("La pelicula con menos entradas fue: " + nombreMenosVista);
  console.log(mensajeMasVista);
  console.log("El nombre de la pelicula 3d mas barata fue " + nombreMasBarata);

}
