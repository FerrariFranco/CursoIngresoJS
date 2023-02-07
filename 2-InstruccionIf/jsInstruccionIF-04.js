/// Franco Ferrari Ejercicio if 4
function mostrar()
{
	let edad = parseInt(document.getElementById("txtIdEdad").value);
	
	
if(edad > -1){
	if (edad >= 13 && edad <= 17){
		alert("Es adolecente");
	} else { 	
		alert("No es adolecente");
	}
}
else(alert("No es una edad valida"))
}//FIN DE LA FUNCIÓN