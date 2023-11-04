"use strict";
import { rellenarImagenes, validarPuzzle } from "./biblioteca/funciones.js";

window.onload = () => {
  rellenarImagenes();

  document.getElementById("contenedorGeneralArrastable").addEventListener(
    "dragstart",
    (evento) => {
      //Cogemos el id del elemento que arrastamos con el setData ya que luego el event.target dejará de ser la imagen en el drop.
      evento.dataTransfer.setData("id", evento.target.id);
    },
    false
  );

  document.getElementById("contenedorGeneralArrastable").addEventListener(
    "dragover",
    (evento) => {
      //Prevenimos el comportamiento por defecto.
      evento.preventDefault();
    },
    false
  );

  document.getElementById("contenedorGeneralArrastable").addEventListener(
    "drop",
    (evento) => {
      evento.preventDefault();
      //Si haces el drop en el elemento soltablable o en el contenedor de imagenes de vuelta.
      if (
        evento.target.classList.contains("soltable") ||
        evento.target.id == "contenedorImagenes"
      ) {
        //Cogemos el elemento con el id que guardamos en el set data.
        let elemento = document.getElementById(
          evento.dataTransfer.getData("id")
        );
        //Lo introducimos como hijo.
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
        //Si el index es igual a el número de la imagen quiere decir que la imagen está en su sitio y le ponemos la clase validada.
        if (elemento.getAttribute("src").charAt(6) == index) {
          elemento.classList.add("validado");
        } else {
          if (elemento.classList.contains("validado")) {
            elemento.classList.remove("validado");
          }
        }
      }

      validarPuzzle();
    },
    false
  );

  document.getElementById("reiniciar").addEventListener(
    "click",
    () => {
      //Con esta método reiniciamos la página y la partida.

      location.reload();
    },
    false
  );
};
