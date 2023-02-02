/*3.    Para el departamento de Pinturas:
A.    Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.    Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let Fahrenheit;
    let celcius;
    let mensaje;

    Fahrenheit = parseFloat(document.getElementById("txtIdTemperatura").value);

    celcius = (Fahrenheit - 32) * 5 / 9
    mensaje = Fahrenheit +"º fahrenheit son "+ celcius +"º celcius" ;

    alert(mensaje)
}

function CentigradosFahrenheit () 
{
    let Fahrenheit;
    let celcius;
    let mensaje;

    Fahrenheit = parseFloat(document.getElementById("txtIdTemperatura").value);

    celcius = (Fahrenheit * 9 / 5) + 32 
    mensaje = celcius +"º celcius son "+ Fahrenheit +"º fahrenheit" ;

    alert(mensaje);
}

