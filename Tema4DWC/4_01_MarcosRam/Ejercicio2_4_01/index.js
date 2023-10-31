"use strict";
import { fondoAleatorio } from "../libreria/funciones.js";

window.onload = () => {
  document.body.addEventListener("click", () => {
    console.log("a");
    document.body.style.backgroundColor = `${fondoAleatorio()}`;
  });
};
