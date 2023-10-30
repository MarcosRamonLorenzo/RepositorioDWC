"use strict";

//Declaraciones.

const rellenarArrayAleatorio = () => {
  let array = [];

  for (let i = 0; i < 9; i++) {
    array = [...array, Math.floor(Math.random() * 9)];
  }
  return array;
};

const comprobacionNumerosRepetidosArray = (array = []) => {
  //Pasamos el array a un Set por lo que los elementos repetidos se eliminan y lo comparamos con la longitud del array original.
  let mapaDelArray = new Set(array);

  if (mapaDelArray.size !== array.length) {
    return true;
  }
  return false;
};

//Principal.
let arrayPruebas = rellenarArrayAleatorio();
console.log(arrayPruebas.join(","));
console.log(comprobacionNumerosRepetidosArray(arrayPruebas));

let arraySinRepetir = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arraySinRepetir.join(","));
console.log(comprobacionNumerosRepetidosArray(arraySinRepetir));
