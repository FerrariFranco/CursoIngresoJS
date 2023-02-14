function mostrar()
{
	//tomo el mes
	let mesDelAño = document.getElementById("txtIdMes").value;
	let mensaje;
	switch(mesDelAño){
		case "Febrero" :
			alert("Este mes no tiene mas de 29 dias");
			break;
		
		default :
		alert("Este mes tiene 30 o 31 dias");
		break;


	}
	


}//FIN DE LA FUNCIÓN