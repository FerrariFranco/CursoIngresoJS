/// Franco Ferrari Ejercicio if 7
function mostrar()

{
	let edad = parseInt(document.getElementById("txtIdEdad").value);
	let estadoCivil = document.getElementById("estadoCivil").value;


if(edad > -1){
	if (edad < 18 && estadoCivil != "Soltero"){
		alert("Es muy pequeño para NO ser soltero");
	}
	else{
		console.log("")
	}
}
else(alert("No es una edad valida"))
}