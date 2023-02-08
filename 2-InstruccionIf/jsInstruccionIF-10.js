/// Franco Ferrari Ejercicio if 10
function mostrar()
{
    let random
	let mensaje

	random = Math.floor(Math.random() * 10) + 1;

	if (random >= 9){
		mensaje ="EXCELENTE " + random;
	} else if (random >= 4) { 	
		mensaje ="APROBO " + random;
	} else{
		mensaje ="Vamos la proxima se puede " + random
	}
    alert(mensaje)

}

	
