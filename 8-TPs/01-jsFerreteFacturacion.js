/*1.    Para el departamento de facturación:
A.    Ingresar tres precios de productos y mostrar la suma de los mismos.
B.    Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.    ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let numUno;
    let num2;
    let num3;
    let suma;
    let mensaje;

    numUno = parseInt(document.getElementById("txtIdPrecioUno").value);
    num2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    num3 = parseInt(document.getElementById("txtIdPrecioTres").value);
    suma = numUno + num2 + num3;

    mensaje = "El precio final es "+ suma;

    alert(mensaje)
}
function Promedio () 
{

    let numUno;
    let num2;
    let num3;
    let promedio;
    let mensaje;

    numUno = parseInt(document.getElementById("txtIdPrecioUno").value);
    num2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    num3 = parseInt(document.getElementById("txtIdPrecioTres").value);
    promedio = (numUno + num2 + num3)/3;

    mensaje = "El precio final es  "+ promedio;

    alert(mensaje)
}
function PrecioFinal () 
{
    let numUno;
    let num2;
    let num3;
    let precio;
    let precioFinal;
    let mensaje;

    numUno = parseInt(document.getElementById("txtIdPrecioUno").value);
    num2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    num3 = parseInt(document.getElementById("txtIdPrecioTres").value);
    precio = (numUno + num2 + num3);
    precioFinal = precio + (precio * 0.21);

    mensaje = "El precio final es "+ precioFinal;

    alert(mensaje)
}