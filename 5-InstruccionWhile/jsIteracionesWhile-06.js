function mostrar()
{
	var contador;
    var acumulador;
    var numeroIngresado;

    contador=0;
    acumulador=0;
    numeroIngresado = 0;


    while(contador < 5){
        contador = contador + 1;
        numeroIngresado = parseInt(prompt("ingresa un numero"));
        acumulador = acumulador + numeroIngresado
    }



    document.getElementById("txtIdSuma").value = acumulador
    document.getElementById("txtIdPromedio").value = acumulador/5
}//FIN DE LA FUNCIÓN