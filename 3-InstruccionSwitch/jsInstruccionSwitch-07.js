<<<<<<< HEAD
function mostrar() {
  let destinoIngresado = document.getElementById("txtIdDestino").value;
  let mensaje;
  switch (destinoIngresado) {
    case "Bariloche":
    case "Ushuaia":
      mensaje = "Sur";
      break;
=======
function mostrar()
{
	let destinoIngresado = document.getElementById("txtIdDestino").value;
	let mensaje;

	switch(destinoIngresado){	
	
    case "Bariloche" :
	case "Ushuaia" :
		alert("Sur");
	break;
>>>>>>> eb322009928c8a6f4ba710088c6daab11e16494b

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
