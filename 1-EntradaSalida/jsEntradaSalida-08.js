/*Franco Ferrari Ejercicio 8
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()

{
	let numUno;
	let numDos;
	let resto;
	let mensaje;

	numUno = parseInt(document.getElementById("txtIdNumeroDividendo").value);
    numDos = parseInt(document.getElementById("txtIdNumeroDivisor").value);
	resto = numUno % numDos;
    mensaje = "El resto es: " + resto;

	alert(mensaje);
}
/*
//Ejercicio 8 bis
{
	let numUno;
	let numDos;
	let suma;
	let promedioSuma
	let moduloDePrimerNum;
	let mensaje;

	numUno = parseInt(document.getElementById("txtIdNumeroDividendo").value);
    numDos = parseInt(document.getElementById("txtIdNumeroDivisor").value);
	suma = numUno + numDos;
	promedioSuma = suma / 2;
	moduloDePrimerNum = numUno % numDos
	
    mensaje = "El suma es: " + suma + ", " + "el promedio es: " + promedioSuma + ", " + "el modulo es: " + moduloDePrimerNum;

	alert(mensaje);
}
*/
