function mostrar() {
  let estacionIngresada;
  let destinoIngresado;
  let promocion;
  let precio;
  let precioFinal;
  let mensaje;

  estacionIngresada = document.getElementById("txtIdEstacion").value;
  destinoIngresado = document.getElementById("txtIdDestino").value;
  precio = 1500;

  switch (estacionIngresada) {
    case "Invierno":
      switch (destinoIngresado) {
        case "Bariloche":
          promocion = 0.2;
          break;

        case "Cordoba":
          promocion = -0.1;
          break;

        case "Mar del plata":
          promocion = -0.2;
          break;

        case "Cataratas":
          promocion = 0;
          break;
      }
      break;

    case "Verano":
      switch (destinoIngresado) {
        case "Bariloche":
          promocion = -0.2;
          break;

        case "Cordoba":
          promocion = 0.1;
          break;

        case "Mar del plata":
          promocion = 0.2;
          break;

        case "Cataratas":
          promocion = 0;
          break;
      }
      break;

    default:
      switch (destinoIngresado) {
        case "Bariloche":
          promocion = 0.1;
          break;

        case "Cordoba":
          promocion = -0;
          break;

        case "Mar del plata":
          promocion = 0.1;
          break;

        case "Cataratas":
          promocion = 0.1;
          break;
      }
      break;
  }

  precioFinal = precio + precio * promocion;

  mensaje = precioFinal + "$";

  alert(mensaje);
} //FIN DE LA FUNCIÓN
