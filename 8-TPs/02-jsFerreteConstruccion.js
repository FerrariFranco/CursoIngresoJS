/*2.    Para el departamento de Construcción:
A.     mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.    mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.    Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let numUno;
    let numDos;
    let suma;
    let Perimetro;
    let alambre;
    let mensaje;

    numUno = parseInt(document.getElementById("txtIdLargo").value);
    numDos = parseInt(document.getElementById("txtIdAncho").value);

    suma = numUno + numDos;
    Perimetro = suma * 2;
    alambre = Perimetro * 3;

    mensaje = "Hace falta  "+ alambre +" metros de alambre";

    alert(mensaje);
}
function Circulo () 
{
    let radio;
    let perimetro;
    let alambre;
    let mensaje;

    radio = parseInt(document.getElementById("txtIdRadio").value);

    perimetro = 2 * 3.14 * radio ; 
    alambre = perimetro * 3;

    mensaje = "Hace falta  "+ alambre +" metros de alambre";

    alert(mensaje);
}
function Materiales () 
{
    let numUno;
    let numDos;
    let m2;
    let cal;
    let cemento;
    let mensaje;

    numUno = parseFloat(document.getElementById("txtIdLargo").value);
    numDos = parseFloat(document.getElementById("txtIdAncho").value);

    m2 = numUno * numDos;
    cemento= m2 * 2;
    cal = m2 * 3;

    mensaje = "Hace falta "+ cemento +" bolsas de cemento y "+ cal +" bolsas de cal";

    alert(mensaje);
}