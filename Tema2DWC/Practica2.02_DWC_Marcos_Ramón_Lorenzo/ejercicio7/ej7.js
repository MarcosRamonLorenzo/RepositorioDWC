"use strict";

//declaraciones

let discente = {
  id: 1232165,
  nombre: "Marcos",
  apellidos: "Ramón Lorenzo",
  aficiones: ["baloncesto", "judo", "cosas"],
  notas: {
    primera: 10,
    segunda: 2,
    tercera: 4,
  },
};

function generadorObjetosCurso(
  paramNombreCurso,
  paramAño,
  paramDescripcion,
  arrayAlumnos = []
) {
  let curso = {
    nombreCurso: paramNombreCurso,
    año: paramAño,
    descripcion: paramDescripcion,
    alumnos: arrayAlumnos,
  };

  return curso;
}

let curso = generadorObjetosCurso("DIW", "1504", "Desarrollo Isabel Web");
curso = { ...curso, matricular: matricular };

function matricular(discente) {
  this.alumnos = [...this.alumnos, discente];
}

//main
curso.matricular(discente);
console.log(curso);
