/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar() {    // declarar variables
    let numeroIngresado;
    let numeroMaximo = -Infinity;
    let numeroMinimo = Infinity;
    let respuesta;
    let numeroPar = Infinity;
    let numeroNegativo = -Infinity;
    let mensajeUno = ("");
    let mensajeDos = ("");

    //iniciar variables

    respuesta = "si";


    /* while(respuesta == "si" || respuesta == "SI" || respuesta == "Si" ||respuesta == "sI"){
         numeroIngresado = parseInt(prompt("Ingrese un número:"));
 
 
         if(numeroIngresado > numeroMaximo){
             numeroMaximo = numeroIngresado;
         }
 
         if(numeroIngresado < numeroMinimo){
             numeroMinimo = numeroIngresado;
         }
 
         respuesta = prompt("Desea ingresar otro número? (coloque Si)");
     }
 
     document.getElementById("txtIdMaximo").value = numeroMaximo;
     document.getElementById("txtIdMinimo").value = numeroMinimo;*/



    while (respuesta == "si" || respuesta == "SI" || respuesta == "Si" || respuesta == "sI") {
        numeroIngresado = parseInt(prompt("Ingrese un número:"));
        while (isNaN(numeroIngresado)) {
            numeroIngresado = parseInt(prompt("ERROR : ingresa un numero"));
        }
        if (numeroIngresado > numeroMaximo) {
            numeroMaximo = numeroIngresado;
            if (numeroMaximo < 0) {
                if (numeroMaximo > numeroNegativo) {
                    numeroNegativo = numeroMaximo;
                    mensajeDos = " El mayor de los negativos fue: " + numeroNegativo + ".";
                }
            }
        }

        if (numeroIngresado < numeroMinimo) {
            numeroMinimo = numeroIngresado;

        }
        if (numeroIngresado % 2 == 0) {
            if (numeroIngresado < numeroPar) {
                numeroPar = numeroIngresado;
                mensajeUno = "El menor numero par ingresado: " + numeroPar + ".";
            }
        }

        respuesta = prompt("Desea ingresar otro número? (coloque Si)");
    }

    document.getElementById("txtIdMaximo").value = numeroMaximo;
    document.getElementById("txtIdMinimo").value = numeroMinimo;
    alert(mensajeUno + mensajeDos);


}

