<<<<<<< HEAD
function mostrar() {
  //tomo la hora
  let hora = document.getElementById("txtIdHora").value;
  let mensaje;
=======
function mostrar()
{
	//tomo la hora
	let hora = document.getElementById("txtIdHora").value
	let mensaje;
>>>>>>> eb322009928c8a6f4ba710088c6daab11e16494b

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
