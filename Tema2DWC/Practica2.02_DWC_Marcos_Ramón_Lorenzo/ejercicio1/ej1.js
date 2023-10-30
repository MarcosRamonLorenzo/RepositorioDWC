"use strict";

//declaración

function sumaDeNumeros() {
  let acumulador = 0;

  //esta variable controla la salida de la función
  let controlador = false;

  for (let i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] !== "number") {
      controlador = true;
    }
    acumulador += arguments[i];
  }

  return controlador === true
    ? console.log(`Error. Datos mal introducidos`)
    : console.log(`La suma total es de : ${acumulador}`);
}

//main

console.log(sumaDeNumeros(1, 2, 3));
console.log(sumaDeNumeros(1, "a", 3));
