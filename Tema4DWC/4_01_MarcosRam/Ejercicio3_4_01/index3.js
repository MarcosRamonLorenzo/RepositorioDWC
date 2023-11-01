"use strict";

window.onload = () => {
  let elementoP = document.getElementById("localizador");
  document.body.addEventListener(
    "mousemove",
    (event) => {
      console.log(event);
      //Cogemos y cambiamos las coordenadas  con los atributos de coordenadas del evento.
      elementoP.textContent = `Cordenada X:${event.screenX} Cordenada Y:${event.screenY}`;
    },
    false
  );
};
