"use strict";

const cruzGriega = (numero) => {
  //Comprobamos los datos.
  if (numero % 3 != 0 || typeof numero !== "number") {
    console.log(`No puedo dibujar la cruz sorry`);
  } else {
    // For que recorre columnas.
    for (let i = 0; i < numero; i++) {
      //Creamos un array por cada línea que cada iteración se reinicia y tiene el número de la línea.
      let array = [`${i}:`];
      //For que recorre lineas
      for (let j = 0; j < numero; j++) {
        //Los ifs siguientes comparan con la tercera parte del numero introducido.
        //Este if comprueba que el valor este en la primera tercera parte o en la ultima tercera parte.
        //Le restamos uno el numero para que encaje.
        if (j < numero / 3 || j > numero - 1 - numero / 3) {
          //Ahora comprobamos que la columna tampoco esta en la primera tercera parte o en la ultima tercera parte.
          if (i < numero / 3 || i > numero - 1 - numero / 3) {
            //Si entra aqui es que esta en la primera tercera parte o en la ultima.
            array = [...array, "#"];
          } else {
            //Si no entra es que la columana esta en la segunda tercera parte.
            array = [...array, "."];
          }
        } else {
          //Si no esta pintamos puntos.
          array = [...array, "."];
        }
      }

      console.log(array.join(" "));
    }
  }
};

cruzGriega(12);
