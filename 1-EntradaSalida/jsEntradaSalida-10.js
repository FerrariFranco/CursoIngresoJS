/*Franco Ferrari Ejercicio 10
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
 {
 	let importe;
 	let descuento;
 	let porcentaje = -25

 	importe = parseInt(document.getElementById("txtIdImporte").value);

 	descuento = importe + (importe * (porcentaje /100));

 	document.getElementById("txtIdResultado").value = descuento;
 }

// Ejercicio 10 bis
// {
// 	let importe;
// 	let descuentoAplicado;
// 	let cuanto

// 	importe = parseInt(document.getElementById("txtIdImporte").value);
     
// 	cuanto = prompt("Cuanto descuento solicita? (sin el simbolo %)");

// 	cuanto = parseInt(cuanto);

// 	descuentoAplicado = importe - (importe * (cuanto / 100)) + "$"; 

// 	document.getElementById("txtIdResultado").value = descuentoAplicado;
// }

