/*Franco Ferrari Ejercicio 3
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar() 
{
	let nombreIngresado;
	nombreIngresado = document.getElementById("txtIdNombre").value;
	alert(nombreIngresado);
  }

/*
//Ejercicio 3 bis
{
	let numeroIngresado;
	let descripcion = prompt("Descripción de producto");
	let valorAumento;


	numeroIngresado = parseInt(document.getElementById("txtIdNombre").value);

    valorAumento = numeroIngresado + (numeroIngresado * 0.30);

    


	alert(descripcion + " " + "$" + valorAumento);
  }*/

