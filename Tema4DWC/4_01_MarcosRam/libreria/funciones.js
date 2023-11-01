"use strict";

//Ejercicio 1.
const crearH1 = () => {
  //Cogemos el contenedor H1 y le añadimos un h1.
  /*Me he creado un contenedor de h1 ya que si lo pones 
  diretamente en el body los botones se bloquean y 
  no puedes parar de generar etiquetas h1*/
  document.getElementById("contenedorH1").innerHTML += "<h1>¡Hola Feo!</h1>";
};

//Ejercicio 2.
const fondoAleatorio = () => {
  let letras = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];
  let fondo = "#";
  for (let i = 0; i < 6; i++) {
    fondo += letras[Math.floor(Math.random() * 16)];
  }
  return fondo;
};

export { crearH1, fondoAleatorio };
