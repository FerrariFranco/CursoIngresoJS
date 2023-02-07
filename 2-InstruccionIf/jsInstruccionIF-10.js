function mostrar()
{
    let random

	random = Math.floor(Math.random() * 10) + 1;

	if (random >= 9){
		alert("EXCELENTE");
	} else if (random >= 4 && random <=8) { 	
		alert("APROBO");
	} else{
		alert("Vamos la proxima se puede")
	}
}

