function mostrar()
{
	let edad = document.getElementById("txtIdEdad").value;

	if (edad >= 13 && edad <= 17){
		alert("Es adolecente");
	} else { 	
		alert("No es adolecente");
	}
	
}//FIN DE LA FUNCIÓN