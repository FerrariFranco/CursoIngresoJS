function mostrar()
{

if(edad > -1){
	let edad = document.getElementById("txtIdEdad").value;
	let estadoCivil = document.getElementById("estadoCivil").value;

	if (edad > 17 && estadoCivil == "Soltero"){
		alert("Es soltero y no es menor");
	}
	else{
		console.log("")
	}
}
else(alert("No es una edad valida"))
}