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

        evento.target.appendChild(elemento);

        //Cogemos a todos lo hijos del contenedor puzzle.
        let contenedorPuzzle =
          document.getElementById("contenedorPuzzle").children;
        let index;

        //Cogemos el index de el div en el cual se ha introducido la imagen.
        for (let i = 0; i < contenedorPuzzle.length; i++) {
          if (contenedorPuzzle[i] == evento.target) {
            index = i + 1;
          }
        }
        //Si el index es igual a el número de la imagen quiere decir que la imagen esta en su sitio y le ponemos la class validada.
        if (elemento.getAttribute("src").charAt(6) == index) {
          evento.target.classList.add("validado");
        }
      }

      validarPuzzle();
    },
    false
  );

  document.getElementById("reiniciar").addEventListener(
    "click",
    () => {
      //Con esta metodo reiniciamos la página y la partida.
      location.reload();
    },
    false
  );
};
