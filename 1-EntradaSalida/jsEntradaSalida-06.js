/*Franco Ferrari Ejercicio 6
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    let num1;
	let num2;
	let suma;
	let mensaje;

	num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
    num2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	suma = num1 + num2;
    mensaje = "El resultado es: " + suma;

	alert(mensaje);
}

