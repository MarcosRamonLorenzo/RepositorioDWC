"use strict";
import { fondoAleatorio } from "../libreria/funciones.js";

window.onload = () => {
  document.body.addEventListener(
    "dblclick",
    () => {
      //Para cambiar el fondo de esta forma he utilizado estilo en línea porque con clases creo que no se puede hacer.
      document.body.style.backgroundColor = `${fondoAleatorio()}`;
    },
    false
  );
};
