function mostrar()
{
	//tomo el mes
	let mesDelAño = document.getElementById("txtIdMes").value;
<<<<<<< HEAD
	let mensaje
=======
	let mensaje;
>>>>>>> eb322009928c8a6f4ba710088c6daab11e16494b

    switch(mesDelAño){
		case "Enero" :
			mensaje = "Que comiences bien el año!!!";
		break;
        case "Marzo" :
			mensaje = "A clases!!!";
		break;
		case "Julio" :
			mensaje = "Se vienen las vacaciones!!!";
		break;
		case "Diciembre" :
			mensaje = "Felices fiestas!!!!";
		break;
	    default :
		mensaje = "Es un mes normal.";
		break;

	}
	alert(mensaje);



	



}//FIN DE LA FUNCIÓN