"use strict";
import { crearH1 } from "./libreria/funciones.js";

window.onload = () => {
  let intervalo;

  let botonSaludar = document.getElementById("botonComenzar");
  botonSaludar.addEventListener("click", () => {
    //Cada segundo crea un h1.
    intervalo = setInterval(() => {
      //Creamos un h1 cada 1 segundo.
      crearH1();
    }, 2000);
  });

  let botonParar = document.getElementById("botonAcabar");
  botonParar.addEventListener("click", () => {
    //Paramos el intérvalo.
    clearInterval(intervalo);
  });
};
