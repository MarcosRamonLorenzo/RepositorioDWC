"use strict";

window.onload = () => {
  //Cogemos al elemento que se puede arrastrar  y le ponemos la propiedad de arrastrar.
  let elementoDraggable = document.getElementById("draggable");
  elementoDraggable.setAttribute("draggable", true);

  //Cogemos el contenedor y la zona en la que se pueden arrastrar los elementos.
  let contenedorBasura = document.getElementById("soltable");
  let zonaArrastable = document.getElementById("zona_arrastable");

  //Cuando se empieze a arrastrar  cogemos el id del elemento arrastrado.
  zonaArrastable.addEventListener(
    "dragstart",
    (evento) => {
      evento.dataTransfer.setData("elemento", evento.target.id);
    },
    false
  );

  //Prevenimos el funcionamiento por defecto.
  zonaArrastable.addEventListener(
    "dragover",
    (evento) => {
      evento.preventDefault();
    },
    false
  );

  //
  zonaArrastable.addEventListener(
    "drop",
    (evento) => {
      evento.preventDefault();
      //Cogemos el elemento con el id mediante el datatransfer.
      let elemento = document.getElementById(
        evento.dataTransfer.getData("elemento")
      );
      contenedorBasura.appendChild(elemento);
      //Si el depósito de arrastrables tiene más de un hijo, es decir que la bola ha sido introducida lo cambiamos por la basura llena.

      if (contenedorBasura.children.length == 2) {
        contenedorBasura.innerHTML = `<img id="basura_completa"
        src="https://png.pngtree.com/png-vector/20231018/ourmid/pngtree-full-rubbish-bin-garbage-can-png-image_10209878.png"
        alt="Foto Basura"
      />`;
      }
    },
    false
  );
};
