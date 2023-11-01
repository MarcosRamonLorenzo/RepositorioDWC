"use strict";

window.onload = () => {
  let elementoP = document.getElementById("localizador");
  document.body.addEventListener("mousemove", (event) => {
    console.log(event);
    elementoP.textContent = `Cordenada X:${event.screenX} Cordenada Y:${event.screenY}`;
  });
};
