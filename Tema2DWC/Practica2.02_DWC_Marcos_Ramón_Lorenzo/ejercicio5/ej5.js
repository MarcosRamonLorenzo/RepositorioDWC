"use strict";

//declaraciones
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

let recorrerObjetoClase = (objetoClase) => {
  for (const key in objetoClase) {
    //si el objeto tiene datos dentro lo recorro con el mismo método
    if (Array.isArray(key)) {
      recorrerObjetoClase(key);
    } else {
      console.log(`${key} := ${objetoClase[key]}`);
    }
  }
};

let curso1 = generadorObjetosCurso(
  "DWC",
  "1940",
  "Desarrollo web de casas",
  [1, 2, 3]
);
recorrerObjetoClase(curso1);
