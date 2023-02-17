/*
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
function mostrar() {
    /*let n

    n = 1

    while(n <= 10)
    {alert(n);
    n =+ 1;}
*/
    let banderaDelPrimero;
    let numeroIngresado;
    let nombre;
    let numeroMaximo;
    let numeroMinimo;
    let nombreViejo;
    let nombreJoven;
    let respuesta;


    banderaDelPrimero = true
    respuesta = "si";
    numeroMaximo = -Infinity;
    numeroMinimo = Infinity;



    while (respuesta == "si" || respuesta == "SI" || respuesta == "Si" || respuesta == "sI") {
        nombre = prompt("ingrese nombre");
        numeroIngresado = parseInt(prompt("ingrese numero"));

        while (isNaN(numeroIngresado) || numeroIngresado > 120 || numeroIngresado < 0) {
            numeroIngresado = parseInt(prompt("ERROR : ingresa un numero"));
        }

        if (banderaDelPrimero == true) {
            numeroMaximo = numeroIngresado;
            numeroMinimo = numeroIngresado;
            nombreViejo = nombre;
            nombreJoven = nombre;
            banderaDelPrimero = false;
        }

        else if (numeroIngresado > numeroMaximo) {
            numeroMaximo = numeroIngresado;
            nombreViejo = nombre;
        }

        else if (numeroIngresado < numeroMinimo) {
            numeroMinimo = numeroIngresado;
            nombreJoven = nombre;
        }

        respuesta = prompt("Desea continuar? (coloque Si)");

    }


    alert("Su edad es " + numeroMaximo + " Y su nombre es " + nombreViejo + " Y sos el/la mas viejo!");
    alert("Su edad es " + numeroMinimo + " Y su nombre es " + nombreJoven + " Y sos el/la mas joven!!");
}//FIN DE LA FUNCIÓN