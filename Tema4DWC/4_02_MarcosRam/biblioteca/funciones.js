"use strict";

//ChatGpt me ha hecho esta función y asi las imagenes se mezclaran didrente cada vez.
const generarNumerosAleatorios = () => {
  const numerosDisponibles = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const numerosAleatorios = [];

  for (let i = 0; i < 9; i++) {
    const indiceAleatorio = Math.floor(
      Math.random() * numerosDisponibles.length
    );
    const numeroAleatorio = numerosDisponibles.splice(indiceAleatorio, 1)[0];
    numerosAleatorios.push(numeroAleatorio);
  }

  return numerosAleatorios;
};

const rellenarImagenes = () => {
  let contenedorImagenes = document.getElementById("contenedorImagenes");
  let arrayNumAleatorios = generarNumerosAleatorios();
  for (let i = 0; i < 9; i++) {
    //Por cada iteración añadimos una imagen.
    contenedorImagenes.innerHTML += `<img class="imagen" src="./img/${arrayNumAleatorios[i]}.png" alt="Foto${arrayNumAleatorios[i]}">`;
    //Le ponemos el atributo draggable a cada foto.
    contenedorImagenes.children[i].setAttribute("draggable", true);
  }
};

export { rellenarImagenes };
