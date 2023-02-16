<<<<<<< HEAD
function mostrar() {
  //tomo el mes
  let mesDelAño = document.getElementById("txtIdMes").value;
  let mensaje;

  switch (mesDelAño) {
    case "Febrero":
      mensaje = "Este mes no tiene mas de 29 dias";
      break;

    default:
      mensaje = "Este mes tiene 30 o 31 dias";
      break;
  }
  alert(mensaje);
} //FIN DE LA FUNCIÓN
