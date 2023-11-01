"use strict";

window.onload = () => {
  let elementosDivPrincipales =
    document.getElementsByClassName("elementoImpar");

  for (let i = 0; i < elementosDivPrincipales.length; i++) {
    let elementoDiv = elementosDivPrincipales[i];
    elementoDiv.addEventListener("click", (event) => {
      console.log(event.target);
      let hermanodeElemento =
        event.target.nextElementSibling.classList.toggle("ocultar");
    });
  }
};
