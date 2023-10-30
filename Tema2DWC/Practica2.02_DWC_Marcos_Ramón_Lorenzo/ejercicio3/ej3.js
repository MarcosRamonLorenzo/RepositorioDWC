"use strict";

//declaraciones

const generadorArray = () => {
  let vector = [];
  for (let i = 0; i <= 100; i++) {
    vector[i] = Math.floor(Math.random() * 101);
  }
  return vector;
};

const sumaArrays = (vectorA = [], vectorB = []) => {
  let vector = [];
  for (let i = 0; i < vectorA.length; i++) {
    vector[i] = vectorA[i] + vectorB[i];
  }
  return vector;
};

function imprimirArrays(vectorA, vectorB, vectorC) {
  //utilizo el join para que se imprima con un string
  console.log(`Vector 1 :[ ${vectorA.join()} ]`);
  console.log(`Vector 2 :[ ${vectorB.join()} ]`);
  console.log(`Vector 3 :[ ${vectorC.join()} ]`);
}

function calcular(generarArrays, sumarArrays, imprimirArrays) {
  let vector1 = generarArrays();
  let vector2 = generarArrays();
  let vector3 = [];

  //creamos un array revertido
  //revertimos el array 2 para sumarlo mas adelante con el 1 ya que nos pide sumar las posiciones contrias del vector 2
  const vectorRevertido = [...vector2];
  vectorRevertido.reverse();
  vector3 = [...sumaArrays(vector1, vectorRevertido)];

  imprimirArrays(vector1, vector2, vector3);
}

//main
calcular(generadorArray, sumaArrays, imprimirArrays);
