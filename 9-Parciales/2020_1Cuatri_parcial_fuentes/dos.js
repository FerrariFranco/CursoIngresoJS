function mostrar() {
  /*
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
  
      precio = parseInt(prompt("Ingrese precio."));
      while (isNaN(precio) || precio < 0) {
        precio = parseInt(prompt("Ingrese precio (mayor a 0)."));
      }
  
      cantidad = parseInt(prompt("Ingrese Cantidad."));
      while (isNaN(cantidad) || cantidad < 0) {
        cantidad = parseInt(prompt("Ingrese Cantidad (mayor a 0)."));
      }
  
      acumCantidad = acumCantidad + cantidad;
  
      switch (producto) {
        case "cal":
        case "Cal":
          tipoProducto = "Cal";
          contCal = contCal + 1;
          acumCantidadCal = acumCantidadCal + cantidad;
          break;
        case "Arena":
        case "arena":
          tipoProducto = "Arena"
          contArena = contArena + 1;
          acumCantidadArena = acumCantidadArena + cantidad;
          break;
        case "Cemento":
        case "cemento":
          tipoProducto = "Cemento"
          contCemento = contCemento + 1;
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
    alert("Y el tipo de producto mas caro fue: " + tipoCaro + " y costo " + masCaro + "$ por bolsa");+
    
    ---------------------------------------------------------------------------------------------------------------------
    */




  let animal;
  let edad;
  let acumSiames = 0;
  let acumTurco = 0;
  let acumGenerico = 0;
  let acumPeterbald = 0;
  let nombre;
  let gatoMasViejo;
  let pajaroMasViejo;
  let nombrePajaroMasViejo
  let perroMasViejo;
  let nombrePerroViejo;
  let nombreGatoViejo;
  let nombreOtroViejo;
  let otroMasViejo;
  let banderaGato = true;
  let banderaPerro = true;
  let banderaPajaro = true;
  let banderaOtro = true;
  let contSiames = 0;
  let contTurco = 0;
  let contGenerico = 0;
  let contPeterbald = 0
  let promedioMasUnidades;
  let mensajeMasUnidades;
  let masSolicitado = 0;


  for (i = 0; i < 3; i++) {
    animal = prompt("Que desea ingresar? ('gato', 'perro', 'pajaro' u 'otro')");
    while (animal != "perro" && animal != "gato" && animal != "otro" && animal != "pajaro") {
      animal = prompt("Que animal ingresar?  ('gato', 'perro', 'pajaro' u 'otro')");
    }
    switch (animal) {
      case "perro":
        raza = prompt("Que raza de perro desea ingresar? ('pastor', 'toy', o 'callejero')");
        while (raza != "pastor" && raza != "toy" && raza != "callejero") {
          raza = prompt("Que raza de perro desea ingresar? ('pastor', 'toy', o 'callejero')");
        }
        edad = parseInt(prompt("Ingrese edad de su perro."));
        while (isNaN(edad) || edad > 21 || edad < 0) {
          edad = parseInt(prompt("Ingrese edad (entre 1 y 20)."));
        }

        nombre = prompt("Ingrese el nombre de la mascota");
        if (banderaPerro == true) {
          perroMasViejo = edad;
          nombrePerroViejo = nombre;
          banderaGato = false;
        }
        else if (perroMasViejo < edad) {
          perroMasViejo = edad;
          nombrePerroViejo = nombre;
        }
        break;
      case "gato":
        raza = prompt("Que raza desea ingresar? ('siames', 'turco', 'peterbald', o 'generico')");
        while (raza != "siames" & raza != "turco" && raza != "peterbald" && raza != "generico") {
          raza = prompt("Que raza desea ingresar? ('siames', 'turco', 'peterbald', o 'generico')");
        }
        edad = parseInt(prompt("Ingrese edad de su gato."));
        while (isNaN(edad) || edad > 21 || edad < 0) {
          edad = parseInt(prompt("Ingrese edad (entre 1 y 20)."));
        }
        switch (raza) {
          case "siames":
            contSiames = contSiames + 1;
            acumSiames = acumSiames + edad;
            break;
          case "turco":
            contTurco = contTurco + 1;
            acumTurco = acumTurco + edad;
            break;
          case "peterbald":
            contPeterbald = contPeterbald + 1;
            acumPeterbald = acumPeterbald + edad;
            break;
          default:
            contGenerico = contGenerico + 1;
            acumGenerico = acumGenerico + edad;
        }
        nombre = prompt("Ingrese el nombre de la mascota");
        if (banderaGato == true) {
          gatoMasViejo = edad;
          nombreGatoViejo = nombre;
          banderaGato = false;
        }
        else if (gatoMasViejo < edad) {
          gatoMasViejo = edad;
          nombreGatoViejo = nombre;
        }
        break;
      case "pajaro":
        raza = prompt("Que raza desea ingresar?");
        edad = parseInt(prompt("Ingrese edad de su pajaro."));
        while (isNaN(edad) || edad > 50 || edad < 0) {
          edad = parseInt(prompt("Ingrese edad (entre 1 y 50)."));
        }

        nombre = prompt("Ingrese el nombre de la mascota");
        if (banderaPajaro == true) {
          pajaroMasViejo = edad;
          nombrePajaroMasViejo = nombre;
          banderaPajaro = false;
        }
        else if (pajaroMasViejo < edad) {
          pajaroMasViejo = edad;
          nombrePajaroMasViejo = nombre;
        }
        break;
      default:
        raza = prompt("Que raza desea ingresar?");
        edad = parseInt(prompt("Ingrese la edad del animal."));
        while (isNaN(edad) || edad > 100 || edad < 0) {
          edad = parseInt(prompt("Ingrese edad (entre 1 y 100)."));
        }

        nombre = prompt("Ingrese el nombre de la mascota");
        if (banderaOtro == true) {
          otroMasViejo = edad;
          nombreOtroViejo = nombre;
          banderaOtro = false;
        }
        else if (otroMasViejo < edad) {
          otroMasViejo = edad;
          nombreOtroViejo = nombre;
        }
        break;
    }


  }


  if (contSiames > masSolicitado) {
    masSolicitado = contSiames;
    promedioMasUnidades = acumSiames / contSiames;
    mensajeMasUnidades = "La raza de gato mas solicitada fue siames y tiene un promedio de edad de:  " + promedioMasUnidades + " años.";
  }
  if (contTurco > masSolicitado) {
    masSolicitado = contTurco;
    promedioMasUnidades = acumTurco / contTurco;
    mensajeMasUnidades = "La raza de gato mas solicitada fue turco y tiene un promedio de edad de:  " + promedioMasUnidades + " años.";
  }
  if (contGenerico > masSolicitado) {
    masSolicitado = contGenerico;
    promedioMasUnidades = acumGenerico / contGenerico;
    mensajeMasUnidades = "La raza de gato mas solicitada fue generico y tiene un promedio de edad de:  " + promedioMasUnidades + " años.";
  }
  if (contPeterbald > masSolicitado) {
    masSolicitado = contPeterbald;
    promedioMasUnidades = acumPeterbald / contPeterbald;
    mensajeMasUnidades = "Ha La raza de gato mas solicitada fue peterbald  y tiene un promedio de edad de:  " + promedioMasUnidades + " años. cantidades iguales en 2 o mas animals!"
  }


  console.log("El gato mas viejo es: " + nombreGatoViejo);
  console.log("El Perro mas viejo es: " + nombrePerroViejo);
  console.log("El Pajaro mas viejo es: " + nombrePajaroMasViejo);
  console.log("El Otro mas viejo es: " + nombreOtroViejo);
  console.log(mensajeMasUnidades);



}
