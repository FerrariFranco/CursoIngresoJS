<<<<<<< HEAD
function mostrar() {
  //tomo el mes
  let mesDelAño = document.getElementById("txtIdMes").value;
  let mensaje;
  switch (mesDelAño) {
    case "Abril":
    case "Mayo":
    case "Junio":
      mensaje = "Falta poco para el frio";
      break;
=======
function mostrar()
{
	//tomo el mes
	let mesDelAño = document.getElementById("txtIdMes").value;
	let mensaje;
	
    switch(mesDelAño){
		case "Abril" :
		case "Mayo" :
		case "Junio" :
			alert("Falta poco para el frio");
		break;
>>>>>>> eb322009928c8a6f4ba710088c6daab11e16494b

    case "Julio":
    case "Agosto":
      mensaje = "Abrigate que es invierno!!";
      break;

    default:
      mensaje = "Ya paso el invierno, ahora el calor!!";
      break;
  }
  alert(mensaje);
} //FIN DE LA FUNCIÓN
