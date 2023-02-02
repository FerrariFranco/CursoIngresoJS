/*Franco Ferrari Ejercicio 8
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()

{
	let num1;
	let num2;
	let resto;
	let mensaje;

	num1 = parseInt(document.getElementById("txtIdNumeroDividendo").value);
    num2 = parseInt(document.getElementById("txtIdNumeroDivisor").value);
	resto = num1 % num2;
    mensaje = "El resto es: " + resto;

	alert(mensaje);
}
/*{
	let num1;
	let num2;
	let suma;
	let promedioSuma
	let moduloDePrimerNum;
	let mensaje;

	num1 = parseInt(document.getElementById("txtIdNumeroDividendo").value);
    num2 = parseInt(document.getElementById("txtIdNumeroDivisor").value);
	suma = num1 + num2;
	promedioSuma = suma / 2;
	moduloDePrimerNum = ((num1 % num2 ) + num2 ) % num2;
	
    mensaje = "El suma es: " + suma + ", " + "el promedio es: " + promedioSuma + ", " + "el modulo es numero es: " + moduloDePrimerNum;

	alert(mensaje);
}
*/
