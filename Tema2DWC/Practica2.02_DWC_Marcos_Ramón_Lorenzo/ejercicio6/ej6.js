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

  calcularMedia: function () {
    let contador = 0;
    let acumuladorMedia = 0;

    for (const key in this.notas) {
      if (typeof this.notas[key] !== "number") {
        break;
      }

      acumuladorMedia += this.notas[key];
      contador++;
    }
    //comprobamos si el resultado es un número
    if (typeof acumuladorMedia === "number") {
      //usamos el toFixed para redondear
      console.log(
        `La media de ${this.nombre} = ${(acumuladorMedia / contador).toFixed(
          2
        )}`
      );
    } else {
      console.log(`No se pudo calcular la media para ${this.nombre}`);
    }
  },

  imprimirAficiones: function () {
    //usamos el metodo every para saber si en el array todos cumplen la condición de ser tipo "string"
    if (
      this.aficiones.every((aficion) => typeof aficion === "string") === false
    ) {
      console.log(`Las aficiones no pueden ser números o otra cosa`);
    } else {
      let aficionesString = this.aficiones.join(", ");
      console.log(`Las aficiones de ${this.nombre} son : ${aficionesString}`);
    }
  },

  imprimirInforme: function () {
    console.log(`------Informe------`);
    console.log(`ID: ${this.id}`);
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Apellidos: ${this.apellidos}`);
    this.imprimirAficiones();
    console.log(`Notas:`);
    for (let nota in this.notas) {
      console.log(`${nota}: ${this.notas[nota]}`);
    }
    this.calcularMedia();
  },
};

//main

discente.imprimirInforme();
