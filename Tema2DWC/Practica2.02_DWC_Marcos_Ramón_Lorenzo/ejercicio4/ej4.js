"use strict";

//declaraciones

function generadorObjetosCurso(
  paramNombreCurso,
  paramAño,
  paramDescripcion,
  arrayAlumnos = []
) {
  let alumno = {
    nombreCurso: paramNombreCurso,
    año: paramAño,
    descripcion: paramDescripcion,
    alumnos: arrayAlumnos,
  };

  return alumno;
}

//preubas

let alumno1 = generadorObjetosCurso("DWC", "1940", "Desarrollo web de casas");
console.log(alumno1);
