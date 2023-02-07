/// Franco Ferrari Ejercicio if 6
function mostrar()

{
	let edad = document.getElementById("txtIdEdad").value;
if(edad > -1){
	if (edad > 17){
		alert("Es un adulto");
	} else if (edad >= 13 && edad <=17) { 	
		alert("Es adolecente");
	} else{
		alert("Es un niño")
	}
}
else(alert("No es una edad valida"))
}