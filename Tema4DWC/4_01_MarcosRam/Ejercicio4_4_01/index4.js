"use strict";

window.onload = () => {
  let elementosDivPrincipales =
    document.getElementsByClassName("elementoImpar");

  for (let i = 0; i < elementosDivPrincipales.length; i++) {
    //Le añado el evento a cada elemento impar.
    let elementoDiv = elementosDivPrincipales[i];
    elementoDiv.addEventListener(
      "click",
      (event) => {
        //Le añado la clase ocultar o se la quito al hermano del elemento.
        event.target.nextElementSibling.classList.toggle("ocultar");
      },
      false
    );
  }
};
