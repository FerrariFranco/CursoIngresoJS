function mostrar()
{
	var destinoIngresado = document.getElementById("txtIdDestino").value;
	
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

}//FIN DE LA FUNCIÓN