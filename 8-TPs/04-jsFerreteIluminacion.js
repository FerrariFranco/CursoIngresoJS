/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() {
  let cantLamp;
  let marcaLamp;
  let descuento;
  let precio;
  let precioTotal;
  let impuesto;
  let mensaje;
  let mensajeImpuesto;

  cantLamp = document.getElementById("txtIdCantidad").value;

  marcaLamp = document.getElementById("Marca").value;

  precio = 35;

  precioTotal = cantLamp * precio;

  if (cantLamp >= 6) {
    descuento = precioTotal - precioTotal * 0.5;
  } else if (cantLamp == 5 && marcaLamp == "ArgentinaLuz") {
    descuento = precioTotal - precioTotal * 0.4;
  } else if (cantLamp == 5) {
    descuento = precioTotal - precioTotal * 0.3;
  } else if (
    cantLamp == 4 &&
    (marcaLamp == "ArgentinaLuz" || marcaLamp == "FelipeLamparas")
  ) {
    descuento = precioTotal - precioTotal * 0.25;
  } else if (cantLamp == 4) {
    descuento = precioTotal - precioTotal * 0.2;
  } else if (cantLamp == 3 && marcaLamp == "ArgentinaLuz") {
    descuento = precioTotal - precioTotal * 0.15;
  } else if (cantLamp == 3 && marcaLamp == "FelipeLamparas") {
    descuento = precioTotal - precioTotal * 0.1;
  } else if (cantLamp == 3) {
    descuento = precioTotal - precioTotal * 0.05;
  } else {
    alert("No tiene descuentos disponibles");
  }

  if (descuento >= 120) {
    impuesto = descuento * 0.1;

    descuento = impuesto + descuento;

    mensaje = descuento + "$";

    mensajeImpuesto = "Se le agrego un IIBB de " + impuesto + "$";

    alert(mensajeImpuesto);

    document.getElementById("txtIdprecioDescuento").value = mensaje;
  } else {
    mensaje = descuento + "$";

    document.getElementById("txtIdprecioDescuento").value = mensaje;
  }
}
