function mostrar()
{
	//tomo el mes
	let mesDelAño = document.getElementById("txtIdMes").value;
	let mensaje;

    switch(mesDelAño){
		case "Enero" :
			alert("Que comiences bien el año!!!");
		break;
        case "Marzo" :
			alert("A clases!!!");
		break;
		case "Julio" :
			alert("Se vienen las vacaciones!!!");
		break;
		case "Diciembre" :
			alert("Felices fiestas!!!!");
		break;
	    default :
		alert("Es un mes normal.");
		break;

	}
	



	



}//FIN DE LA FUNCIÓN