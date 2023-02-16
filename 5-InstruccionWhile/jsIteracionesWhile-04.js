/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;
	numeroIngresado = parseInt(prompt("ingrese un número entre 0 y 10."));

	while(numeroIngresado > 10 || numeroIngresado < -1 || isNaN(numeroIngresado)){
		alert("Ese numero no esta entre 0 y 9")
		numeroIngresado = parseInt(prompt("ingrese un número entre 0 y 10."));
	}
	document.getElementById("txtIdNumero").value = numeroIngresado;
	
}//FIN DE LA FUNCIÓN