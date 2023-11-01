"use strict";

window.onload = () => {
  //Cogemos al elemento que se puede arrastar y le ponemos la propiedad de arrastrar.
  let elementoDraggable = document.getElementById("draggable");
  elementoDraggable.setAttribute("draggable", true);

  //Cogemos el contenedor y la zona en la que se pueden arrastrar los elementos.
  let contenedorBasura = document.getElementById("soltable");
  let zonaArrastable = document.getElementById("zona_arrastable");

  //Cuando se empieze a arrastar cogemos el id del elemento arrastrado.
  zonaArrastable.addEventListener("dragstart", (evento) => {
    evento.dataTransfer.setData("elemento", evento.target.id);
  });

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

      let elemento = document.getElementById(
        evento.dataTransfer.getData("elemento")
      );
      contenedorBasura.appendChild(elemento);
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
