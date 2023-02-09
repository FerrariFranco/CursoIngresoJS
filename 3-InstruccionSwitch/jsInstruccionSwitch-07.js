function mostrar()
{
	var destinoIngresado = document.getElementById("txtIdDestino").value;
	
	switch(destinoIngresado){	
	
    case "Bariloche" :
	case "Ushuaia" :
		alert("Sur");
	break;

	case "Cataratas" :
		alert("Norte");
	break;
	case "Mar del plata" :
		alert("Este");
	break;
	
	default :
	alert("Seleccione un destino valido");
	break;}

}//FIN DE LA FUNCIÓN