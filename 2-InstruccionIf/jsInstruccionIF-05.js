/// Franco Ferrari Ejercicio if 5
function mostrar()

	{
	if(edad > -1){
		let edad = parseInt(document.getElementById("txtIdEdad").value);
	
		if (edad >= 13 && edad <= 17){
			console.log("Es adolecente");
		} else { 	
			alert("No es adolecente");
		}
	}
	else(alert("No es una edad valida"))}