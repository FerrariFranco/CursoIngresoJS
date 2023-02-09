/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroIntroducido; 
var contadorIntentos = 0;
var random;

function comenzar()
{
  random = Math.floor(Math.random() * 100) + 1;
  console.log(random);
  
}

function verificar()
{
	contadorIntentos = contadorIntentos + 1
  document.getElementById("txtIdIntentos").value = contadorIntentos
  numeroIntroducido = parseInt(document.getElementById("txtIdNumero").value)
	


  if(numeroIntroducido < random){
    alert("falta...")
 }else if(numeroIntroducido > random){
  alert("se paso...")
 }else{
  if(contadorIntentos <=1){
   alert("Ganaste! Eres un psiquico!")
  }else if(contadorIntentos == 2){
    alert("Excelente percepción, a la segunda!!")
  }else if(contadorIntentos == 3){
   alert("Esto es suerte!")
  }else if(contadorIntentos == 4){
   alert("Excelente tecnica!")
  }else if(contadorIntentos == 5){
	alert("Usted esta en la media!")
  }else if(contadorIntentos >= 6 && contadorIntentos <= 10){
     alert("Falta tecnica")
  }else{
	alert("Dedicate a otra cosa")
  }
}

}