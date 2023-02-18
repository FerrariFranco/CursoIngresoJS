/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
function ComenzarIngreso() {
    var numeroIngresado = document.getElementById("txtIdNumero").value;


}
function NumerosPares() {

    let numeroIngresado = document.getElementById("txtIdNumero").value;

    for (i = 2; i < numeroIngresado; i = i + 2) {

        alert(i);
    }
}

function NumerosImpares() {
    let numeroIngresado = document.getElementById("txtIdNumero").value;


    for (i = 0; i < numeroIngresado; i = i + 1) {
        if (i % 2 != 0) {
            alert(i);
        }


    }

}

function NumerosDivisibles() {
    let numeroIngresado = document.getElementById("txtIdNumero").value;
    for (let i = 1; i <= numeroIngresado; i++) {
        if (numeroIngresado % i === 0) {
            alert(i)
        }
    }

}

function VerificarPrimo() {
    let numeroIngresado = document.getElementById("txtIdNumero").value;
    if (numeroIngresado < 2) {
        alert(numeroIngresado + " no es primo.");
        return;
    }
    for (let i = 2; i <= numeroIngresado / 2; i++) {
        if (numeroIngresado % i === 0) {
            alert(numeroIngresado + " no es primo.");
        }
    }
    alert(numeroIngresado + " es primo.");

}


function NumerosPrimos() {
    let numeroIngresado = document.getElementById("txtIdNumero").value;
    let cantidad = 0;
    let numerosPrimos;

    for (let i = 1; i <= numeroIngresado; i++) {
        numerosPrimos = true;

        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                numerosPrimos = false;
                break;
            }
        }

        if (numerosPrimos && i !== 1) {
            alert(i + " es primo");
            cantidad++;
        }
    }

    alert("Hay " + cantidad + " números primos desde 1 hasta " + numeroIngresado);
    return cantidad;
}





