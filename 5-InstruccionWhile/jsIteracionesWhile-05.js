/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexoIngresado;
	sexoIngresado = prompt("ingrese f ó m .");

    while(sexoIngresado != "m" && sexoIngresado != "f" && sexoIngresado != "F" && sexoIngresado != "M"){
		alert("Ingrese un sexo válido, m o f")
		sexoIngresado = prompt("ingrese f ó m .")
	}
	if(sexoIngresado == "m"){
		sexoIngresado = "Masculino";
	}else{
		sexoIngresado = "Femenino";
	}

	document.getElementById("txtIdSexo").value = sexoIngresado;
}//FIN DE LA FUNCIÓN