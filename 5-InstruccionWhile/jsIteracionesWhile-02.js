/*
al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.*/
function mostrar() {
    /*let i
i = 10
while(i > 0){
  console.log(i);
  i = i - 1;
}
*/



    let i;
    let acumulador;
    let suma;
    let promedio;
    let numeroIngresado;

    i = 0;
    acumulador = 0;
    numeroIngresado = 0;
    suma = 0

    while (i < 5) {
        i = i + 1;
        numeroIngresado = parseInt(prompt("ingresa un numero"));
        while (isNaN(numeroIngresado)) {
            numeroIngresado = parseInt(prompt("ERROR : ingresa un numero"));
        }

        if (numeroIngresado > 9 && numeroIngresado < 21) {
            acumulador = acumulador + 1;
            suma = suma + numeroIngresado;
        }

    }

    promedio = suma / acumulador;

    alert(acumulador);
    alert(promedio);

}//FIN DE LA FUNCIÓN