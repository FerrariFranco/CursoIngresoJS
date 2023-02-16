function mostrar() {
  let destinoIngresado = document.getElementById("txtIdDestino").value;
  let mensaje;
  switch (destinoIngresado) {
    case "Bariloche":
    case "Ushuaia":
      mensaje = "Frio";
      break;

    case "Mar del plata":
    case "Cataratas":
      mensaje = "Calor";
      break;

    default:
      mensaje = "Seleccione un destino valido";
      break;
  }
  alert(mensaje);
} //FIN DE LA FUNCIÓN
