/* Franco Ferrari Ejercicio 5
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
    let nombre;
	let edad;
	let mensaje;

	nombre = document.getElementById("txtIdNombre").value;
    edad = document.getElementById("txtIdEdad").value;
	mensaje = "Usted se llama " + nombre + " y tiene " + edad + " años";

	alert(mensaje);
}
/*{	
    let nombre;
	let edad;
	let mensaje;
	let apellido


	apellido = prompt("Ingrese su apellido");
	nombre = document.getElementById("txtIdNombre").value;
    edad = document.getElementById("txtIdEdad").value;
	mensaje = apellido + ", usted se llama " + nombre + " y tiene " + edad + " años";

	alert(mensaje);
}*/


