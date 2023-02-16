
function mostrar() {
  //tomo el mes
  let mesDelAño = document.getElementById("txtIdMes").value;
  let mensaje;
  switch (mesDelAño) {
    case "Abril":
    case "Mayo":
    case "Junio":
      mensaje = "Falta poco para el frio";
      break;

    case "Julio":
    case "Agosto":
      mensaje = "Abrigate que es invierno!!";
      break;

    default:
      mensaje = "Ya paso el invierno, ahora el calor!!";
      break;
  }
  alert(mensaje);
} //FIN DE LA FUNCIÓN
