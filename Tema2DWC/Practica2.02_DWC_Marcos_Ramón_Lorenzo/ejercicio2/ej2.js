"use strict";

//declaraciones

//con esta funcion hacemos la tabla de un numero solo
function multiplicar(numero) {
  for (let i = 0; i <= 10; i++) {
    console.log(`${numero} X ${i} =${numero * i}`);
  }
  console.log(`----------`);
}

function tablas(numero, functionMultiplicar) {
  if (numero <= 2) {
    return console.log(`El numero que has introducido no funciona`);
  }

  for (let i = numero; i >= 2; i--) {
    functionMultiplicar(i);
  }
}

//main

tablas(5, multiplicar);
