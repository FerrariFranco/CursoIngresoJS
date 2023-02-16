
function mostrar() {
  //tomo la hora
  let hora = document.getElementById("txtIdHora").value;
  let mensaje;

  switch (hora) {
    case "7":
    case "8":
    case "9":
    case "10":
    case "11":
      mensaje = "Es de mañana.";
      break;
    default:
      console.log("No es de mañana.");
      break;
  }
  alert(mensaje);
} //FIN DE LA FUNCIÓN
