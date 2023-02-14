/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;
	let clave = "utn750";
	
	claveIngresada = prompt("Ingrese su clave");

	while (claveIngresada != clave){
        claveIngresada = prompt("Clave incorrecta, intente nuevamente");

	}
	alert("Ingreso exitoso!!")
	
}//FIN DE LA FUNCIÓN
