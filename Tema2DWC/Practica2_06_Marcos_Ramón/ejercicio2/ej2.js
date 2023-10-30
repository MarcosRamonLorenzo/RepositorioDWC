"use strict";

//Declaraciones.

//Ejercicio 1

const rellenarArrayAleatorio = () => {
  let array = [];

  for (let i = 0; i < 9; i++) {
    array = [...array, Math.floor(Math.random() * 9)];
  }
  return array;
};

const comprobacionNumerosRepetidosArray = (array = []) => {
  let mapaDelArray = new Set(array);

  if (mapaDelArray.size !== array.length) {
    return true;
  }
  return false;
};

//Ejercicio 2.

const rellenarArrayAleatorioTresDimensiones = () => {
  let array = [];

  for (let i = 0; i < 9; i++) {
    array[i] = rellenarArrayAleatorio();
  }
  return array;
};

const comprobacionNumerosRepetidosArrayTresXTres = (array = []) => {
  //Con el metodo flat creamos un array que contiene los valores de los arrays que hay dentro de el.
  let arrayCopia = array.flat();
  return comprobacionNumerosRepetidosArray(arrayCopia);
};

//Principal.
const tresDimensiones = rellenarArrayAleatorioTresDimensiones();
console.log(tresDimensiones.join("\n"));

console.log("------------");

let arrayBidimensional = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(arrayBidimensional.join("\n"));
console.log(comprobacionNumerosRepetidosArrayTresXTres(arrayBidimensional));

let arrayBidimensional2 = [
  [1, 2, 3],
  [4, 4, 6],
  [7, 9, 9],
];
console.log(arrayBidimensional2.join("\n"));
console.log(comprobacionNumerosRepetidosArrayTresXTres(arrayBidimensional2));
