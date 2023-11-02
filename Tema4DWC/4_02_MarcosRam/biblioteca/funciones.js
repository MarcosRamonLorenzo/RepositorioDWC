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
    //Le ponemos el atributo draggable a cada foto.
    //Guardlo el id ya que con el
    contenedorImagenes.innerHTML += `<img id="imagen${arrayNumAleatorios[i]}" class="imagen" src="./img/${arrayNumAleatorios[i]}.png" alt="Foto${arrayNumAleatorios[i]}" draggable="true">`;
  }
};

const validarPuzzle = () => {
  let contenedorPuzzle = document.getElementById("contenedorPuzzle").children;
  let validacion = true;

  for (let i = 0; i < contenedorPuzzle.length; i++) {
    //Si alguno no tiene la classe validado no lo validará.
    if (!contenedorPuzzle[i].classList.contains("validado")) {
      validacion = false;
      break;
    }
  }
  if (validacion) {
    document.getElementById(
      "botonYwin"
    ).innerHTML += `<h1 id="mensajeGanador">Has ganado</h1>`;
    document.getElementById("reiniciar").addEventListener(
      "click",
      () => {
        //Con esta metodo reiniciamos la página y la partida.
        console.log("a");
        location.reload();
      },
      false
    );
  }
};

export { rellenarImagenes, validarPuzzle };
