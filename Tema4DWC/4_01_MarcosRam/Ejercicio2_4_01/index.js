"use strict";
import { fondoAleatorio } from "../libreria/funciones.js";

window.onload = () => {
  document.body.addEventListener("dblclick", () => {
    console.log("a");
    document.body.style.backgroundColor = `${fondoAleatorio()}`;
  });
};
