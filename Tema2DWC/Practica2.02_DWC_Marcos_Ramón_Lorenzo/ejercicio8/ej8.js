const imprimirObjeto = (objeto) => {
  for (const key in objeto) {
    //compruebo que el tipo de dato sea un array, una funcion o que sea un objeto con datos dentro
    if (Array.isArray(objeto[key])) {
      console.log(`Tipo : array , Clave:${key} , Valor/Valores : [ `);
      imprimirObjeto(objeto[key]);
      console.log(`]`);
    } else if (typeof objeto[key] == "function") {
      console.log(`Tipo : ${typeof objeto[key]} , Clave : ${key} `);
    } else if (typeof objeto[key] == "object" && objeto[key] !== null) {
      console.log(`Tipo : ${typeof objeto[key]} , Clave : ${key} , Valor :[`);
      imprimirObjeto(objeto[key]);
      console.log(`]`);
    } else {
      console.log(
        `Tipo : ${typeof objeto[key]} , Clave : ${key} , Valor : ${objeto[key]}`
      );
    }
  }
};

let objetoPrueba = {
  id: 1232165,
  nombre: "Marcos",
  apellidos: "Ramón Lorenzo",
  aficiones: ["baloncesto", "judo", "cosas"],
  notas: {
    primera: 10,
    segunda: 2,
    tercera: 4,
  },
  imprimirNombre: () => {
    return this.nombre;
  },
};

//main

imprimirObjeto(objetoPrueba);
