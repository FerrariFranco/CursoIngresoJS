/*
Enunciado:
Bienvenidos.
debemos alquilar el servicio de transporte para llegar a Bariloche con un grupo de personas, de cada persona debemos optener los siguientes datos:
Nombre,
Obra Social ("PAMI", "OSDE" o "otras"),
Edad(solo pueden ir mayores de edad),
temperatura corporal(validar)
y sexo (validar).
NOTA:el precio por pasajero es de $9000.
Se debe informar (solo si corresponde):
a) La cantidad de personas con PAMI de mas de 60 años.
b) El nombre y temperatura de la mujer OSDE mas joven.
c) Cuanto sale el viaje total sin descuento.
d) Si hay mas del 50% de los pasajeros que pertenecen a PAMI, el precio final tiene un descuento del 25%, que solo mostramos si corresponde.
*/
function mostrar() {

    let nombreIngresado;
    let obraSocial;
    let edadIngresada;
    let temperatura;
    let sexoIngresado;
    let contadorTotalPersonas = 0;
    let contadorPami = 0;
    let contadorPamiViejos = 0;
    let banderaMasJoven = true;
    let nombreMasJoven;
    let temperaturaMasJoven;
    let respuesta = "si"
    let masJoven;
    let precioTotal;
    let precioDescuento;
    let porcentajePami;
    let mensajeDescuento = "";
    let mensajeB = ""


    while (respuesta == "si" || respuesta == "SI" || respuesta == "Si" || respuesta == "sI") {

        nombreIngresado = prompt("Ingrese el nombre.");
        while (!isNaN(parseInt(nombreIngresado))) {
            nombreIngresado = prompt("Ingrese un nombre valido.");
        }

        sexoIngresado = prompt("Ingrese el sexo ('m', 'f', 'n')");
        while (sexoIngresado != "f" & sexoIngresado != "m" && sexoIngresado != "n") {
            sexoIngresado = prompt("Ingrese el sexo ('m', 'f', 'n')");
        }

        edadIngresada = parseInt(prompt("Ingrese la edad"));
        while (isNaN(edadIngresada) || edadIngresada > 110 || edadIngresada < 17) {
            edadIngresada = parseInt(prompt("Ingrese la edad"));
        }

        obraSocial = prompt("Ingrese la obra social ('pami', 'osde', 'otro')");
        while (obraSocial != "pami" & obraSocial != "osde" && obraSocial != "otro") {
            obraSocial = prompt("Ingrese la carrera curzante ('pami', 'otro', 'osde')");
        }


        temperatura = parseInt(prompt("Ingrese la temperatura"));
        while (isNaN(temperatura) || temperatura > 45 || temperatura < 30) {
            temperatura = parseInt(prompt("Ingrese la temperatura"));
        }



        switch (obraSocial) {
            case "pami":
                contadorPami = contadorPami + 1;
                if (edadIngresada > 59) {
                    contadorPamiViejos = contadorPamiViejos + 1;
                }
                break;


            case "osde":
                if (banderaMasJoven == true || (sexoIngresado == "f" && masJoven < edadIngresada)) {
                    masJoven = edadIngresada;
                    nombreMasJoven = nombreIngresado;
                    temperaturaMasJoven = temperatura;
                    mensajeB = "El nombre de la mujer de osde mas jove es" + nombreMasJoven + " su edad es: " + masJoven + " y su temperatura es: " + temperaturaMasJoven;
                    banderaMasJoven = false;
                }

        }

        contadorTotalPersonas = contadorTotalPersonas + 1;


        respuesta = prompt("Desea continuar? escriba 'si'")
    }



    precioTotal = contadorTotalPersonas * 9000;

    porcentajePami = (contadorPami / contadorTotalPersonas) * 100;

    if (porcentajePami > 50) {
        precioDescuento = precioTotal - (precioTotal * 0.25);
        mensajeDescuento = "Con descuento le queda en $" + precioDescuento;
    }

    if (contadorPamiViejos != 0) {
        console.log("La cantidad de personas de pami que tiene mas de 60 años es de: " + contadorPamiViejos);
    } else {
        console.log("No hay mayores de 60 en pami");
    }


    console.log(mensajeB);
    console.log("El valor total del viaje es $" + precioTotal);
    console.log(mensajeDescuento);

}//fin funcion mostrar
