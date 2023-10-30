"use strict";
//me falta una parte del cuadrado
const dibujarMarco = (lienzo, interior) => {
  //Comprobamos los datos.
  if (
    lienzo % 3 != 0 ||
    (typeof lienzo !== "number" && interior < lienzo) ||
    typeof interior !== "number"
  ) {
    console.log(`No puedo dibujar la cruz sorry`);
  } else {
    for (let i = 0; i < lienzo; i++) {
      let array = [`${i}:`];

      for (let j = 0; j < lienzo; j++) {
        if (i < lienzo / 3 || i > lienzo - 1 - lienzo / 3) {
          array = [...array, "#"];
        } else {
          if (j > (lienzo - interior) / 3 || j > lienzo - 1 - lienzo / 3) {
            array = [...array, "."];
          } else {
            array = [...array, "#"];
          }
        }
      }
      console.log(array.join(" "));
    }
  }
};

dibujarMarco(21, 7);
