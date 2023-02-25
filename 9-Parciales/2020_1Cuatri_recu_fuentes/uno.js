
function mostrar() {
/*
    let producto;
    let cantidad;
    let precio;
    let marca;
    let acumJab = 0;
    let acumAlc = 0;
    let acumBar = 0;
    let fabrica;
    let tipoProducto;
    let jabCaro;
    let jabCaroCant;
    let jabCaroFab;
    let banderaJab = true;
    let contJab = 0;
    let contAlc = 0;
    let contBarbijo = 0;
    let promedioMasUnidades;
    let mensajeMasUnidades;




    for (i = 0; i < 5; i++) {
        producto = prompt("Que desea comprar?");
        while (producto != "Jabon" && producto != "jabon" && producto != "Alcohol" && producto != "alcohol" && producto != "Barbijo" && producto != "barbijo") {
            producto = prompt("Que producto comprar?");
        }
        if (producto == "jabon" || producto == "Jabon") {
            tipoProducto = "Jabon";
            contJab = contJab + 1;
        }
        if (producto == "Alcohol" || producto == "alcohol") {
            tipoProducto = "Alcohol"
            contAlc = contAlc + 1;
        }
        if (producto == "barbijo" || producto == "Barbijo") {
            tipoProducto = "Barbijo"
            contBarbijo = contBarbijo + 1;
        }

        precio = parseInt(prompt("Ingrese precio."));
        while (isNaN(precio) || precio > 300 || precio < 100) {
            precio = parseInt(prompt("Ingrese precio (entre 100 y 300)."));
        }

        cantidad = parseInt(prompt("Ingrese Cantidad."));
        while (isNaN(cantidad) || cantidad > 1000 || cantidad < 0) {
            cantidad = parseInt(prompt("Ingrese Cantidad (entre 0 y 1000)."));
        }


        switch (tipoProducto) {
            case "Jabon":
                acumJab = acumJab + cantidad;
                break;
            case "Alcohol":
                acumAlc = acumAlc + cantidad;
                break;
            case "Barbijo":
                acumBar = acumBar + cantidad;
                break;
        }

        marca = prompt("Ingrese marca");

        fabrica = prompt("Ingrese fabricante");



        if (tipoProducto == "Jabon") {
            if (banderaJab == true) {
                jabCaro = precio;
                jabCaroCant = cantidad;
                jabCaroFab = fabrica;
                banderaJab = false;
            }
            else if (tipoProducto == "Jabon" && jabCaro < precio) {
                jabCaro = precio;
                jabCaroCant = cantidad;
                jabCaroFab = fabrica;
            }

        }

    }
    if (acumAlc > acumBar && acumAlc > acumJab) {
        promedioMasUnidades = acumAlc / contAlc;
        mensajeMasUnidades = "El producto con mas unidades compradas fue Alcohol y compró un promedio de " + promedioMasUnidades + " unidades por compra";
    }
    else if (acumBar > acumAlc && acumBar > acumJab) {
        promedioMasUnidades = acumBar / contBarbijo;
        mensajeMasUnidades = "El producto con mas unidades compradas fue Barbijo y compró un promedio de " + promedioMasUnidades + " unidades por compra";
    }
    else if (acumJab > acumAlc && acumJab > acumBar) {
        promedioMasUnidades = acumJab / contJab;
        mensajeMasUnidades = "El producto con mas unidades compradas fue Jabon y compró un promedio de " + promedioMasUnidades + " unidades por compra";
    }
    else {
        promedioMasUnidades = 0;
        mensajeMasUnidades = "Ha ingresado cantidades iguales en 2 o mas productos!"

    }


    alert("El mas barato de los jabones costó: " + jabCaro + ", su fabricante fue: " + jabCaroFab + ", y compro " + jabCaroCant + " unidades!");
    alert(mensajeMasUnidades);
    alert("Compro " + acumBar + " unidades de barbijo");

*/

/*Recu 2020 1 bis: "Jugando al Doctor" 
De 7 personas que ingresan al hospital se deben tomar y validar los siguientes datos:
nombre, altura, peso y sexo.
a)Informar la cantidad de personas de sexo femenino. 
b)La altura promedio en total de pacientes.
c)El nombre del hombre con menos peso(si lo hay).
d)De la persona no binaria, el más flaco. 
Pedir datos por prompt y mostrar por document.write o console.log*/

let nombreIngresado;
let sexoIngresado;
let alturaIngresada;
let pesoIngresado;
let acumladorAltura = 0;
let contadorTotal = 0;
let contFemenino = 0;
let promedioAlturaSobreTotal;
let banderaHombres = true;
let nombreHombre;
let hombreFlaco;
let noBinarioFlacoNombre;
let banderaMasFlaco = true;
let menorPeso;


for (i = 0; i < 3; i++) {
   nombreIngresado = prompt("Ingrese su nombre");
   while(!isNaN(parseInt(nombreIngresado))){
    nombreIngresado = prompt("Ingrese su nombre");
   }
   sexoIngresado = prompt("Ingrese su sexo ('f', 'm', 'n')");
   while(sexoIngresado != "f" && sexoIngresado != "m" && sexoIngresado != "n"){
    sexoIngresado = prompt("Ingrese su sexo ('f', 'm', 'n')");
   }
   alturaIngresada = parseInt(prompt("Ingrese su altura (en centimetros)."));
   while (isNaN(alturaIngresada) || alturaIngresada > 230 || alturaIngresada < 30) {
       alturaIngresada = parseInt(prompt("Ingrese su altura (en centimetros)"));
   }
   pesoIngresado = parseInt(prompt("Ingrese su peso (en kilos)."));
   while (isNaN(pesoIngresado) || pesoIngresado > 300 || pesoIngresado < 1) {
       pesoIngresado = parseInt(prompt("Ingrese su peso (en kilos)"));
   }
   
   acumladorAltura = acumladorAltura + alturaIngresada;
   contadorTotal = contadorTotal + 1;

   switch(sexoIngresado){
    case "f":
        contFemenino = contFemenino + 1;
        break;  
    case "n":
        if (banderaMasFlaco == true) {
            menorPeso = pesoIngresado;
            noBinarioFlacoNombre = nombreIngresado;
            banderaMasFlaco = false;
        }
        else if (menorPeso > pesoIngresado) {
            menorPeso = pesoIngresado;
            noBinarioFlacoNombre = nombreIngresado;
        }
        break;
    case "m":
        if (banderaHombres == true) {
            hombreFlaco = pesoIngresado;
            nombreHombre = nombreIngresado;
            banderaHombres = false;
        }
        else if (hombreFlaco > pesoIngresado) {
            hombreFlaco = pesoIngresado;
            nombreHombre = nombreIngresado;
        }

   }

   


}

promedioAlturaSobreTotal = acumladorAltura / contadorTotal;

console.log("El total de mujeres ingresadas es de " + contFemenino);
console.log("La altura promedio es de " + promedioAlturaSobreTotal);
console.log("El hombre con menos peso fue " + nombreHombre);
console.log("El no binarie mas flaque es " + noBinarioFlacoNombre);
}
