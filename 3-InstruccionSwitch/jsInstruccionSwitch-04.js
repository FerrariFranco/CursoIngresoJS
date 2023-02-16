<<<<<<< HEAD
function mostrar() {
  //tomo el mes
  let mesDelAño = document.getElementById("txtIdMes").value;
  let mensaje;
=======
function mostrar()
{
	//tomo el mes
	let mesDelAño = document.getElementById("txtIdMes").value;
	let mensaje;
>>>>>>> eb322009928c8a6f4ba710088c6daab11e16494b

  switch (mesDelAño) {
    case "Enero":
    case "Marzo":
    case "Mayo":
    case "Julio":
    case "Agosto":
    case "Octubre":
    case "Diciembre":
      mensaje = "Este mes tiene 31 dias.";
      break;
    case "Febrero":
      mensaje = "Este mes tiene 28 dias.";
      break;
    default:
      mensaje = "Este mes tiene 30 dias.";
      break;
  }
  alert(mensaje);
} //FIN DE LA FUNCIÓN
