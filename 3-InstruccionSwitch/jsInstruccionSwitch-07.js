
function mostrar() {
  let destinoIngresado = document.getElementById("txtIdDestino").value;
  let mensaje;
  switch (destinoIngresado) {
    case "Bariloche":
    case "Ushuaia":
      mensaje = "Sur";
      break;
    case "Cataratas":
      mensaje = "Norte";
      break;
   
      case "Mar del plata":
      mensaje = "Este";
      break;

    default:
      mensaje = "Seleccione un destino valido";
      break;
  }
  alert(mensaje);
} //FIN DE LA FUNCIÓN
