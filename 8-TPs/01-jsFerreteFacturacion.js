/*1.    Para el departamento de facturación:
A.    Ingresar tres precios de productos y mostrar la suma de los mismos.
B.    Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.    ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let numUno;
    let numDos;
    let numTres;
    let suma;
    let mensaje;

    numUno = parseInt(document.getElementById("txtIdPrecioUno").value);
    numDos = parseInt(document.getElementById("txtIdPrecioDos").value);
    numTres = parseInt(document.getElementById("txtIdPrecioTres").value);
    suma = numUno + numDos + numTres;

    mensaje = "El precio final es "+ suma;

    alert(mensaje)
}
function Promedio () 
{

    let numUno;
    let numDos;
    let numTres;
    let promedio;
    let mensaje;

    numUno = parseInt(document.getElementById("txtIdPrecioUno").value);
    numDos = parseInt(document.getElementById("txtIdPrecioDos").value);
    numTres = parseInt(document.getElementById("txtIdPrecioTres").value);
    promedio = (numUno + numDos + numTres)/3;

    mensaje = "El precio final es  "+ promedio;

    alert(mensaje)
}
function PrecioFinal () 
{
    let numUno;
    let numDos;
    let numTres;
    let precio;
    let precioFinal;
    let mensaje;

    numUno = parseInt(document.getElementById("txtIdPrecioUno").value);
    numDos = parseInt(document.getElementById("txtIdPrecioDos").value);
    numTres = parseInt(document.getElementById("txtIdPrecioTres").value);
    precio = (numUno + numDos + numTres);
    precioFinal = precio + (precio * 0.21);

    mensaje = "El precio final es "+ precioFinal;

    alert(mensaje)
}