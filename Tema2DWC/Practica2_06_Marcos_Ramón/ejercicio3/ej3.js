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
  //Pasamos el array a un Set por lo que los elementos repetidos se eliminan y lo comparamos con la longitud del array original.
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
  //Con el método flat creamos un array que contiene los valores de los arrays que hay dentro de el.
  let arrayCopia = array.flat();
  return comprobacionNumerosRepetidosArray(arrayCopia);
};

//Ejercicio 3.

const comprobarNumerosRepetidosFila = (array) => {
  let controlador = false;

  for (let i = 0; i < array.length; i++) {
    if (comprobacionNumerosRepetidosArray(array[i]) == true) {
      controlador = true;
      //Hago el return aquí y no hace falta seguir con el bucle ya que se que se repite algún número.
      return controlador;
    }
  }

  return controlador;
};

const comprobarNumerosRepetidosColumna = (array) => {
  let controlador = false;

  for (let i = 0; i < array.length; i++) {
    let arrayComprobar = [];

    for (let j = 0; j < array.length; j++) {
      //Cambiamos la j por la i para que irerar las columnas y luego metemos toda esa columna en un array para comprobarlo.
      arrayComprobar = [...arrayComprobar, array[j][i]];
    }
    if (comprobacionNumerosRepetidosArray(arrayComprobar) == true) {
      controlador = true;
      return controlador;
    }
  }
  return controlador;
};

const comprobacionNumerosRepetidosArrayNueveXNueve = (array = []) => {
  let controlador = false;
  //Hacemos un array con todos los cuadrados 3x3 de el sudoku con el metodo slice el cual seprar un array por los parametros que introducimos.
  let cuadrados3x3 = [
    [array[0].slice(0, 3), array[1].slice(0, 3), array[2].slice(0, 3)],
    [array[0].slice(3, 6), array[1].slice(3, 6), array[2].slice(3, 6)],
    [array[0].slice(6, 9), array[1].slice(6, 9), array[2].slice(6, 9)],
    [array[3].slice(0, 3), array[4].slice(0, 3), array[5].slice(0, 3)],
    [array[3].slice(3, 6), array[4].slice(3, 6), array[5].slice(3, 6)],
    [array[3].slice(6, 9), array[4].slice(6, 9), array[5].slice(6, 9)],
    [array[6].slice(0, 3), array[7].slice(0, 3), array[8].slice(0, 3)],
    [array[6].slice(3, 6), array[7].slice(3, 6), array[8].slice(3, 6)],
    [array[6].slice(6, 9), array[7].slice(6, 9), array[8].slice(6, 9)],
  ];

  for (let i = 0; i < array.length; i++) {
    if (comprobacionNumerosRepetidosArrayTresXTres(cuadrados3x3) == true) {
      controlador = true;
      return controlador;
    }

    return controlador;
  }
};

const comprobarSudokuValido = (sudoku) => {
  if (
    comprobarNumerosRepetidosColumna(sudoku) ||
    comprobarNumerosRepetidosFila(sudoku) ||
    comprobacionNumerosRepetidosArrayNueveXNueve(sudoku)
  ) {
    console.log(`El sudoku no es válido :(`);
  } else {
    console.log(`Oleee el  sudoku es válido :)`);
  }
};

//Principal.

let sudokuCorrecto = [];
sudokuCorrecto[0] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
sudokuCorrecto[1] = [7, 8, 9, 1, 2, 3, 4, 5, 6];
sudokuCorrecto[2] = [4, 5, 6, 7, 8, 9, 1, 2, 3];
sudokuCorrecto[3] = [3, 1, 2, 6, 4, 5, 9, 7, 8];
sudokuCorrecto[4] = [9, 7, 8, 3, 1, 2, 6, 4, 5];
sudokuCorrecto[5] = [6, 4, 5, 9, 7, 8, 3, 1, 2];
sudokuCorrecto[6] = [2, 3, 1, 5, 6, 4, 8, 9, 7];
sudokuCorrecto[7] = [8, 9, 7, 2, 3, 1, 5, 6, 4];
sudokuCorrecto[8] = [5, 6, 4, 8, 9, 7, 2, 3, 1];

comprobarSudokuValido(sudokuCorrecto);

let sudokuIncorrecto = [];
sudokuIncorrecto[0] = [2, 2, 3, 4, 5, 6, 7, 8, 9];
sudokuIncorrecto[1] = [7, 8, 9, 1, 2, 3, 4, 5, 6];
sudokuIncorrecto[2] = [4, 5, 6, 7, 8, 9, 1, 2, 3];
sudokuIncorrecto[3] = [3, 1, 2, 6, 4, 5, 9, 7, 8];
sudokuIncorrecto[4] = [9, 7, 8, 3, 1, 2, 6, 4, 5];
sudokuIncorrecto[5] = [6, 4, 5, 9, 7, 8, 3, 1, 2];
sudokuIncorrecto[6] = [2, 3, 1, 5, 6, 4, 8, 9, 7];
sudokuIncorrecto[7] = [8, 9, 7, 2, 3, 1, 5, 6, 4];
sudokuIncorrecto[8] = [5, 6, 4, 8, 9, 7, 2, 3, 1];
comprobarSudokuValido(sudokuIncorrecto);
