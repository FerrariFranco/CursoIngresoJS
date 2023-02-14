function mostrar()
{
	//tomo el mes
	let mesDelAño = document.getElementById("txtIdMes").value;
	let mensaje;
	
    switch(mesDelAño){
		case "Abril" :
		case "Mayo" :
		case "Junio" :
			alert("Falta poco para el frio");
		break;

		case "Julio" :
		case "Agosto" :
			alert("Abrigate que es invierno!!");
		break;
		
		default :
		alert("Ya paso el invierno, ahora el calor!!");
		break;

		
	}




}//FIN DE LA FUNCIÓN