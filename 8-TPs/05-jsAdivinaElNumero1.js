/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
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
  alert("gano en: " + contadorIntentos + (" intentos!"))
 }

 
    
    

}