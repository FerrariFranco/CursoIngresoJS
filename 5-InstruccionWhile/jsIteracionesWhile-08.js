/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	let numero;
	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta='si';

	while(respuesta == "si" || respuesta == "SI" || respuesta == "Si" ||respuesta == "sI"){
	numero = parseInt(prompt("Ingrese numero"))
		if(numero < 0){       
			    
		
			multiplicacionNegativos = multiplicacionNegativos * numero;
		
			
		}
		else
		{	
			sumaPositivos = sumaPositivos + numero;	
		}

		respuesta = prompt("Desea continuar? (coloque Si)");
	}


    document.getElementById("txtIdSuma").value = sumaPositivos;
	document.getElementById("txtIdProducto").value = multiplicacionNegativos;

}//FIN DE LA FUNCIÓN