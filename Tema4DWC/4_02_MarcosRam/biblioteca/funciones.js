"use strict";

//ChatGpt me ha hecho esta función y así las imágenes se mezclaran difrente cada vez con el método splice y el random.
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
    //Guardlo el id ya que con el comprobaremos si está bien puesta la foto en el puzzle.
    contenedorImagenes.innerHTML += `<img id="imagen${arrayNumAleatorios[i]}" class="imagen" src="./img/${arrayNumAleatorios[i]}.png" alt="Foto${arrayNumAleatorios[i]}" draggable="true">`;
  }
};

const validarPuzzle = () => {
  let contenedorPuzzle = document.getElementsByTagName("img");
  let validacion = true;

  for (let i = 0; i < contenedorPuzzle.length; i++) {
    //Si alguno no tiene la classe validado no lo validará.
    if (!contenedorPuzzle[i].classList.contains("validado")) {
      validacion = false;

      break;
    }
  }
  //Si la validación es correcta le quitamos el oculto y sale la palabra has ganado.
  if (validacion) {
    document.getElementById("mensajeGanador").classList.remove("oculto");
    document.getElementById("reiniciar").addEventListener(
      "click",
      () => {
        //Con esta metodo reiniciamos la página y la partida.
        //Tengo que volver a añadir el evento ya que si no no me deja reiniciar.
        location.reload();
      },
      false
    );
  } else {
    //Si la validación es incorrecta comprobamos que si esta el mensaje de ganar lo oculte de nuevo .
    if (
      !document.getElementById("mensajeGanador").classList.contains("oculto")
    ) {
      document.getElementById("mensajeGanador").classList.add("oculto");
    }
  }
};

export { rellenarImagenes, validarPuzzle };
