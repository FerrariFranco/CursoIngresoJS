<<<<<<< HEAD
function mostrar() {
  let destinoIngresado = document.getElementById("txtIdDestino").value;
  let mensaje;
  switch (destinoIngresado) {
    case "Bariloche":
    case "Ushuaia":
      mensaje = "Frio";
      break;
=======
function mostrar()
{
	let destinoIngresado = document.getElementById("txtIdDestino").value;
	let mensaje;
	
	switch(destinoIngresado){	
	
    case "Bariloche" :
	case "Ushuaia" :
		alert("Frio");
	break;
      
	case "Mar del plata" :
	case "Cataratas" :
		alert("Calor");
	break;
	
	default :
	alert("Seleccione un destino valido");
	break;}
>>>>>>> eb322009928c8a6f4ba710088c6daab11e16494b

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
