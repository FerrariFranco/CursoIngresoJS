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
  let valorDesc;

  cantLamp = parseInt(document.getElementById("txtIdCantidad").value);

  marcaLamp = document.getElementById("Marca").value;

  precio = 35;

  precioTotal = cantLamp * precio;


  /* if (cantLamp >= 0) {
    if (cantLamp >= 6) {
      valorDesc = 50;
    } else if (cantLamp == 5) {
      if (marcaLamp == "ArgentinaLuz") {
        valorDesc = 40;
      } else {
        valorDesc = 30;
      }
    } 
 
 
    else if (cantLamp == 4) {
      if (marcaLamp == "ArgentinaLuz" || marcaLamp == "FelipeLamparas") {
        valorDesc = 25;
      } else {
        valorDesc = 20;
      }
    }
 
 
    else if (cantLamp == 3) {
      if (marcaLamp == "ArgentinaLuz") {
        valorDesc = 15;
      } else if (marcaLamp == "FelipeLamparas") {
        valorDesc = 10;
      } else {
        valorDesc = 5;
      }
    } 
 
    else {
      valorDesc = 0;
    } 
 
    if (cantLamp >= 0) {
      if (cantLamp >= 6) {
        valorDesc = 50;
      } else if (cantLamp == 5) {
        switch (marcaLamp) {
          case "ArgentinaLuz":
            valorDesc = 40;
            break;
          default:
            valorDesc = 30;
        }
 
 
      } else if (cantLamp == 4) {
        switch (marcaLamp) {
          case "ArgentinaLuz":
          case "FelipeLamparas":
            valorDesc = 25;
            break;
          default:
            valorDesc = 20;
        }
 
      } else if (cantLamp == 3) {
        switch (marcaLamp) {
          case "ArgentinaLuz":
            valorDesc = 15;
            break;
 
          case "FelipeLamparas":
            valorDesc = 10;
            break;
 
          default:
            valorDesc = 5;
        }
      } else {
        valorDesc = 0;
      }
 
 
    if (cantLamp > 0) {
      switch (cantLamp) {
        case 5:
          if (marcaLamp == "ArgentinaLuz") { valorDesc = 40 }
          else { valorDesc = 30 }
          break;
 
        case 4:
          if (marcaLamp == "ArgentinaLuz" || marcaLamp == "FelipeLamparas") { valorDesc = 25 }
          else { valorDesc = 20 }
          break;
 
        case 3:
          if (marcaLamp == "ArgentinaLuz") { valorDesc = 15 }
          else if (marcaLamp == "FelipeLamparas") { valorDesc = 10 }
          else { valorDesc = 5 }
          break;
 
        case 2:
          valorDesc = 0
          break;
 
        case 1:
          valorDesc = 0
          break;
 
        default:
          valorDesc = 50
          break;
 
      } */


  if (cantLamp >= 0) {
    switch (cantLamp) {
      case 5:
        switch (marcaLamp) {
          case "ArgentinaLuz":
            valorDesc = 40;
            break;
          default:
            valorDesc = 30;
        }
        break;

      case 4:
        switch (marcaLamp) {
          case "ArgentinaLuz":
          case "FelipeLamparas":
            valorDesc = 25;
            break;
          default:
            valorDesc = 20;
        }
        break;

      case 3:
        switch (marcaLamp) {
          case "ArgentinaLuz":
            valorDesc = 15;
            break;
          case "FelipeLamparas":
            valorDesc = 10;
            break;
          default:
            valorDesc = 5;
        }
        break;

      case 2:
        valorDesc = 0
        break;

      case 1:
        valorDesc = 0
        break;

      default:
        valorDesc = 50
        break;

    }




    descuento = precioTotal - precioTotal * (valorDesc / 100);




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

  } else {
    mensaje = "No valido";

    document.getElementById("txtIdprecioDescuento").value = mensaje;
  }
}
