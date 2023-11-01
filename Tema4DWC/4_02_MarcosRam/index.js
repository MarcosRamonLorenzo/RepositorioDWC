"use strict";
import { rellenarImagenes, validarPuzzle } from "./biblioteca/funciones.js";

window.onload = () => {
  rellenarImagenes();

  document.getElementById("contenedorGeneralArrastable").addEventListener(
    "dragstart",
    (evento) => {
      console.log(evento.target);
      evento.dataTransfer.setData("id", evento.target.id);
      console.log(evento.dataTransfer.getData("id"));
    },
    false
  );

  document.getElementById("contenedorGeneralArrastable").addEventListener(
    "dragover",
    (evento) => {
      evento.preventDefault();
    },
    false
  );

  document.getElementById("contenedorGeneralArrastable").addEventListener(
    "drop",
    (evento) => {
      evento.preventDefault();

      if (
        evento.target.classList.contains("soltable") ||
        evento.target.id == "contenedorImagenes"
      ) {
        let elemento = document.getElementById(
          evento.dataTransfer.getData("id")
        );
        console.log(elemento);
        evento.target.appendChild(elemento);
      }
      validarPuzzle();
    },
    false
  );
};
