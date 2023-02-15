/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{    // declarar variables
    var numeroIngresado;
    var numeroMaximo = -Infinity;
    var numeroMinimo = Infinity;
    var respuesta;
    //iniciar variables

    respuesta = "si";

    
    while(respuesta == "si" || respuesta == "SI" || respuesta == "Si" ||respuesta == "sI"){
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
    document.getElementById("txtIdMinimo").value = numeroMinimo;
}