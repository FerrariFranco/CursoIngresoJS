/// Franco Ferrari Ejercicio if 1
function mostrar()
{
 	let edad = parseInt(document.getElementById("txtIdEdad").value);


 if(edad > -1){
 	if (edad == 15) {
 		alert("Hola niña bonita");
 	} else {
 		alert("Hola");
 	};

 }
 else(alert("No es una edad valida"))



// EJERCICIO 1 BIS
//  let  tiempoHoras = parseInt(prompt("Cuantas horas tardo?"));
//  let distanciaRecorrida = parseInt(document.getElementById("txtIdEdad").value);
//  let kmXHora = distanciaRecorrida / tiempoHoras;
//  let mensaje;

//  if(tiempoHoras > 0 || distanciaRecorrida > 0 ){
//  if(kmXHora <= 60){
//   mensaje ="Demasiado lento"
//  }else if(kmXHora <= 80){
//  mensaje ="Lento"
//  }else if(kmXHora <= 100){
//  mensaje ="Rapido"
//  }else if(kmXHora <= 120){
//  mensaje ="Ahi de la ley"
//  }else{
//  	mensaje ="Eso no se hace."
//  }
//  } else(alert("No introdujo un numero valido"));

//  alert(mensaje);



// EJERCICIO 1 BIS BIS
// let nombre;
//     let peso;
//     let altura;
//     let indiceDeMasaCorporal;
//     let mensaje;

//     nombre = (document.getElementById("txtIdEdad").value);
//     peso = parseFloat(prompt("ingresar peso en kilos"));
//     altura = parseFloat(prompt("ingresar altura en metros"));
//     indiceDeMasaCorporal = peso / (altura * altura)


//     if(indiceDeMasaCorporal < 18.5)
//     {mensaje = nombre +" tiene bajo peso"}

//     else if(indiceDeMasaCorporal >= 18.5 && indiceDeMasaCorporal <= 24.9)
//     {mensaje = nombre +" tiene un peso normal"}

//     else if(indiceDeMasaCorporal >= 25 && indiceDeMasaCorporal <= 26.9)
//     {mensaje = nombre +" tiene Preobesidad"}

//     else if(indiceDeMasaCorporal >= 27 && indiceDeMasaCorporal <= 29.9)
//     {mensaje = nombre +" tiene Obesidad I"}

//     else if(indiceDeMasaCorporal >= 30 && indiceDeMasaCorporal <= 34.9)
//     {mensaje = nombre +" tiene Obesidad II"}

//     else if(indiceDeMasaCorporal > 40)
//     {mensaje = nombre +" tiene Obesidad III"}

// alert(mensaje)


}
//FIN DE LA FUNCIÓN