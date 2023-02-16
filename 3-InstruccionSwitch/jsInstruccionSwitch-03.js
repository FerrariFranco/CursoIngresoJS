<<<<<<< HEAD
function mostrar() {
  //tomo el mes
  let mesDelAño = document.getElementById("txtIdMes").value;
  let mensaje;
=======
function mostrar()
{
	//tomo el mes
	let mesDelAño = document.getElementById("txtIdMes").value;
	let mensaje;
	switch(mesDelAño){
		case "Febrero" :
			alert("Este mes no tiene mas de 29 dias");
			break;
		
		default :
		alert("Este mes tiene 30 o 31 dias");
		break;
>>>>>>> eb322009928c8a6f4ba710088c6daab11e16494b

  switch (mesDelAño) {
    case "Febrero":
      mensaje = "Este mes no tiene mas de 29 dias";
      break;

    default:
      mensaje = "Este mes tiene 30 o 31 dias";
      break;
  }
  alert(mensaje);
} //FIN DE LA FUNCIÓN
