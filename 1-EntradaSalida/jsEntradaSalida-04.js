/* Franco Ferrari Ejercicio 4
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar() {
    let dato = prompt("Ingresa el dato:");

	document.getElementById("txtIdNombre").value = dato;
  }
